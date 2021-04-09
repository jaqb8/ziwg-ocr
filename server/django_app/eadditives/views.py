from rest_framework import viewsets
from .models import Eadditives
from .serializers import EadditivesSerializer


class EadditivesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Eadditives.objects.all()
    serializer_class = EadditivesSerializer
    filterset_fields = ['id', 'code', 'name', 'description']
