from rest_framework import viewsets
from .models import BlogLink
from .serializers import BlogLinkSerializer

class BlogLinkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogLink.objects.all().order_by("-created_at")
    serializer_class = BlogLinkSerializer
