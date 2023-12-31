# Generated by Django 4.2.3 on 2023-07-13 21:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Release',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cover', models.ImageField(null=True, upload_to='images/', verbose_name='cover')),
                ('title', models.CharField(max_length=100, verbose_name='title')),
                ('description', models.TextField(max_length=250, verbose_name='description')),
                ('date', models.DateTimeField(verbose_name='date')),
                ('number', models.IntegerField(verbose_name='number')),
                ('slug', models.SlugField(null=True, verbose_name='slug')),
            ],
        ),
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cover', models.ImageField(null=True, upload_to='images/', verbose_name='cover')),
                ('title', models.CharField(max_length=100, verbose_name='title')),
                ('text', models.TextField(verbose_name='text')),
                ('date', models.DateTimeField(verbose_name='date')),
                ('slug', models.SlugField(null=True, verbose_name='slug')),
                ('number', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='magazine.release')),
            ],
        ),
    ]
