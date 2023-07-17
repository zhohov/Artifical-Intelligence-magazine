from django.db import models
from django.urls import reverse


class Release(models.Model):
    cover = models.ImageField('cover', upload_to='images/', null=True)
    title = models.CharField('title', null=False, max_length=100)
    description = models.TextField('description', null=False, max_length=250)
    date = models.DateTimeField('date', null=False)
    number = models.IntegerField('number', null=False)
    slug = models.SlugField('slug', null=True)

    def __str__(self) -> chr:
        return self.title

    def get_absolute_url(self):
        return reverse('release_detail', kwargs={'slug': self.slug})


class Article(models.Model):
    cover = models.ImageField('cover', upload_to='images/', null=True)
    title = models.CharField('title', null=False, max_length=100)
    text = models.TextField('text', null=False)
    date = models.DateTimeField('date', null=False)
    number = models.ForeignKey(Release, on_delete=models.CASCADE)
    slug = models.SlugField('slug', null=True)

    def __str__(self) -> chr:
        return self.title

    def get_absolute_url(self):
        return reverse('article_detail', kwargs={'article_detail': self.slug})
