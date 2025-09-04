from django.db import models

class Work(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    tech_stack = models.CharField(max_length=100)
    github_url = models.URLField(blank=True)
    image_url = models.URLField(blank=True)
    featured = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title  # 管理画面で表示される名前