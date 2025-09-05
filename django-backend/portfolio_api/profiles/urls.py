from rest_framework import routers
from .views import ProfileViewSet

router = routers.DefaultRouter()
router.register(r'profile', ProfileViewSet)

urlpatterns = router.urls
