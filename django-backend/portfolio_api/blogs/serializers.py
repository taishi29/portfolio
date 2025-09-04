from rest_framework import serializers
from .models import BlogLink

class BlogLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogLink
        fields = "__all__"
