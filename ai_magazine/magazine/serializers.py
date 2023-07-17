from rest_framework.serializers import ModelSerializer

from magazine.models import Release, Article


class ReleaseSerializer(ModelSerializer):
    class Meta:
        model = Release
        fields = '__all__'


class ArticleSerializer(ModelSerializer):
    class meta:
        model = Article
        fields = '__all__'
