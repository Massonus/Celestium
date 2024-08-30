@echo off

python api_server/manage.py makemigrations
python api_server/manage.py makemigrations api
python api_server/manage.py migrate
python api_server/manage.py runserver_plus --cert-file api_server/cert.pem --key-file api_server/key.pem

