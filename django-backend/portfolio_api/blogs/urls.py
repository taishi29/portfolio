from rest_framework.routers import DefaultRouter
from .views import BlogLinkViewSet

router = DefaultRouter()
router.register(r'blogs', BlogLinkViewSet)

urlpatterns = router.urls
