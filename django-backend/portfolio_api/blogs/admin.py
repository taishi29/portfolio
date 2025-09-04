from django.contrib import admin
from .models import BlogLink

@admin.register(BlogLink)
class BlogLinkAdmin(admin.ModelAdmin):
    list_display = ("title", "qiita_url", "created_at")  # 一覧に表示するカラム
    search_fields = ("title", "tags")                   # 検索できるフィールド
    list_filter = ("created_at",)                       # サイドバーにフィルターを追加
