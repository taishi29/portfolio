from django.contrib import admin
from .models import Work

@admin.register(Work)
class WorkAdmin(admin.ModelAdmin):
    # 一覧画面に表示するカラム
    list_display = ("title", "tech_stack", "featured", "created_at")

    # サイドバーにフィルターを追加（おすすめ/非おすすめ）
    list_filter = ("featured", "created_at")

    # 検索ボックスで検索できるフィールド
    search_fields = ("title", "description", "tech_stack")

    # 新しい順に並べたい場合
    ordering = ("-created_at",)
