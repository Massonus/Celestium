from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'  # Определение поля автоинкремента
    name = 'api'  # Имя приложения
