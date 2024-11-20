@echo off
echo ----------------------------------------------------
echo Vou te ajudar a construir o Exata-Tasks
echo ----------------------------------------------------
echo Relaxe, cuidamos de tudo!
echo ----------------------------------------------------
docker-compose down -v
echo Construindo a imagem do Conteiner 
echo ----------------------------------------------------
docker-compose up -d
echo ----------------------------------------------------
echo Conteiner construindo, aguarde mais alguns instantes
echo ----------------------------------------------------
timeout /t 2 >nul
docker-compose exec webapp php artisan migrate --seed
echo ----------------------------------------------------
cls
echo ----------------------------------------------------
echo Rodandos os Testes 
echo ----------------------------------------------------
docker-compose exec webapp php artisan test
echo ----------------------------------------------------
docker-compose exec webapp php artisan migrate:ref --seed
timeout /t 2 >nul
start chrome http://localhost:8000/login
echo ----------------------------------------------------
echo Tudo pronto! 
echo O Exata Tasks esta disponivel em: http://localhost:8000/login
echo ----------------------------------------------------
echo Usuario: admin@admin.com            
echo Senha: admin123
echo ----------------------------------------------------
