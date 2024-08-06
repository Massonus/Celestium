@echo off

python api_server/manage.py makemigrations
python api_server/manage.py makemigrations api
python api_server/manage.py migrate
python api_server/manage.py runserver