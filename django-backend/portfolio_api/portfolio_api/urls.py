from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),          # 管理画面
    path('api/', include('works.urls')),      # works アプリのURLを取り込む
    path("api/", include("blogs.urls")),      # blogs アプリのURLを取り込む
    path("api/", include("profiles.urls")),   # profiles アプリのURLを取り込む
]
