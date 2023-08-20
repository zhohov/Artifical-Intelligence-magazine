from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, AllowAny
from rest_framework.viewsets import ModelViewSet

from magazine.models import Release, Article
from magazine.serializers import ReleaseSerializer, ArticleSerializer


class ReleaseViewSet(ModelViewSet):
    authentication_classes = []
    permission_classes = [IsAuthenticatedOrReadOnly, ]
    queryset = Release.objects.all()
    serializer_class = ReleaseSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['number']
    ordering_fields = ['date', 'number']


class ArticleViewSet(ModelViewSet):
    authentication_classes = []
    permission_classes = [IsAuthenticatedOrReadOnly, ]
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['number']
    ordering_fields = ['date', 'number']
