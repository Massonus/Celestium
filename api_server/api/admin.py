from django.contrib import admin
from .models import User, Article

admin.site.register(User)  # Регистрируем модель User для управления через админку
admin.site.register(Article)
