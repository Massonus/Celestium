from django.test import TestCase
from .models import User


class UserTestCase(TestCase):
    def setUp(self):
        User.objects.create(name="Test User")  # Создаем тестового пользователя

    def test_user_name(self):
        user = User.objects.get(name="Test User")
        self.assertEqual(user.name, "Test User")  # Проверяем корректность имени пользователя
