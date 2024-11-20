

# Bem vindo ao Exata-Tasks
Fico muito feliz que vc estejá aqui, fiz o Exata-Tasks com muito carrinho e dei o meu melhor, espero que goste!

#### Usuario gerados pelo Seeder:
```cmd
Role admin:
usuario: admin@admin.com            
senha: admin123

Role user:
usuario: teste@teste.com          
senha: teste123
```

## Instalação
### Crie um pequeno script para ajudar na instação, ele sobe os containers, roda as migrations, seeders e testes

🚧 Necessário ter o [Docker](https://www.docker.com/) instalado. Os scripts se encontram na raiz do projeto. Será necssario liberar o acesso a porta 3306
    
- Script no Windowns: 
```cmd
./start.bat
```
- Script Linux ou Mac:
```bash
chmod +x start.sh

sh start.sh

```

#### Instalação sem script:
```cmd
docker-compose up -d --build
docker-compose exec webapp php artisan migrate --seed
```
Acesse: http://localhost:8000/login

#### Instalação sem script e sem docker:

- Instalar as dependências do Composer:
```bash
composer install
```
- Copiar o arquivo .env.example para .env 
- Verifiquei se as configurações do arquivo .env

```bash
cp .env.example .env
```
- Cria o banco e roda os seeders:

```bash
php artisan migrate --seed
```
- Gerar a chave de aplicação:

```bash
php artisan key:generate
```
- Inicia o VITE:

```bash
npm run dev
```
- Inicia o servidor

```bash
php aritsan serve
```

