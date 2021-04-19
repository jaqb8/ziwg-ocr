from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import EadditivesViewSet, PhotoProcessView

router = DefaultRouter()
router.register(r'eadditives', EadditivesViewSet, basename='eadditives')
router.register(r'photo-process', PhotoProcessView, basename='photo-process')
urlpatterns = router.urls
