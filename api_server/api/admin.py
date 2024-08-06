from django.contrib import admin
from .models import User

admin.site.register(User)  # Регистрируем модель User для управления через админку
