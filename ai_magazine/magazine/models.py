from django.db import models


class Release(models.Model):
    cover = models.ImageField('cover', upload_to='./images/', null=True)
    title = models.TextField('title', null=False, max_length=150)
    description = models.TextField('description', null=False, max_length=250)
    date = models.DateTimeField('date', null=False)
    number = models.IntegerField('number', null=False)

    def __str__(self) -> chr:
        return self.title


class Article(models.Model):
    title = models.CharField('title', null=False, max_length=100)
    text = models.TextField('text', null=False)
    date = models.DateTimeField('date', null=False)
    number = models.ForeignKey(Release, on_delete=models.CASCADE)

    def __str__(self) -> chr:
        return self.title
