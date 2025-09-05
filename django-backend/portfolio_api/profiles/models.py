from django.db import models
from django.db.models import Q

class Profile(models.Model):
    name = models.CharField(max_length=20)  # 表示名
    headline = models.CharField(max_length=20)  # 学部4年 など
    bio = models.TextField(blank=True)  # 自己紹介（Markdown可）
    cover_image_url = models.URLField(blank=True)  # カバー画像（右側）
    is_active = models.BooleanField(default=True)  # 有効フラグ
    created_at = models.DateTimeField(auto_now_add=True)  # 作成日時
    updated_at = models.DateTimeField(auto_now=True)  # 更新日時

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["is_active"],
                condition=Q(is_active=True),
                name="unique_active_profile"
            )
        ]

    def __str__(self):
        return self.name
