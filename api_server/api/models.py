from django.db import models


class User(models.Model):
    name = models.CharField(max_length=100)
    # Добавь другие поля по необходимости

    def __str__(self):
        return self.name


class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    published_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
