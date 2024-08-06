from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    # Добавь другие поля по необходимости

    def __str__(self):
        return self.name
