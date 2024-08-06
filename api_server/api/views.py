from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        try:
            return super().create(request, *args, **kwargs)
        except Exception as e:
            # Логируем ошибку и возвращаем ответ с кодом ошибки
            print(f"Error: {e}")
            return Response({"error": str(e)}, status=500)
