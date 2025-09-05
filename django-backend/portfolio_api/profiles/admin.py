from django.contrib import admin
from .models import Profile

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    # 一覧画面に表示するカラム
    list_display = ("name", "headline", "is_active", "updated_at")
    
    # サイドバーにフィルターを追加（有効/無効で絞れるように）
    list_filter = ("is_active", "updated_at")
    
    # 検索ボックスで検索できるフィールド
    search_fields = ("name", "headline", "bio")
    
    # 最新順に並べたい場合（任意）
    ordering = ("-updated_at",)
