from django.db import models

class BlogLink(models.Model):
    title = models.CharField(max_length=100)
    qiita_url = models.URLField()
    description = models.TextField(blank=True)
    tags = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
