from rest_framework import viewsets
from .models import Work
from .serializers import WorkSerializer

class WorkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Work.objects.all().order_by("-created_at")
    serializer_class = WorkSerializer
