from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from magazine.models import Release, Article
from magazine.serializers import ReleaseSerializer


class ReleaseViewSet(ModelViewSet):
    queryset = Release.objects.all()
    serializer_class = ReleaseSerializer


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ReleaseSerializer
