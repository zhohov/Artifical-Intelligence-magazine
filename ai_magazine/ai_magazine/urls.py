from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from rest_framework_simplejwt.views import TokenBlacklistView

from magazine.views import ReleaseViewSet, ArticleViewSet

router = SimpleRouter()

router.register(r'releases', ReleaseViewSet)
router.register(r'articles', ArticleViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('logout/', TokenBlacklistView.as_view(), name='token_blacklist')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

