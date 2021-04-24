from rest_framework import viewsets, views, status
from rest_framework.response import Response
from .models import Eadditives
from .serializers import EadditivesSerializer
from .ocr.ocr_service import EadditivesRecognizer


class EadditivesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Eadditives.objects.all()
    serializer_class = EadditivesSerializer
    filterset_fields = ['id', 'code', 'name', 'description']


class PhotoProcessView(viewsets.ViewSet):
    def create(self, request):
        request_fields = list(request.data)
        if request_fields and all([key == 'image' for key in request_fields]):
            symbols_list = EadditivesRecognizer.recognize_eadditives(request.data['image'])

            eadditives = Eadditives.objects.filter(code__in=symbols_list)
            serializer = EadditivesSerializer(eadditives, many=True)

            return Response(data={
                'eadditives': serializer.data
            }, status=status.HTTP_200_OK)
        else:
            return Response(data={
                'msg': 'Illegal fields provided.'
            }, status=status.HTTP_400_BAD_REQUEST)
