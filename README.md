# Bem vindo ao Exata-Tasks

## Requisitos:
#### | PHP >= 8.2.0 | Composer >= 2.7.6 | Laravel >= 11.0 | MySQL = 8.0.37 |

## Instalação

- Instalar as dependências do Composer:
```bash
composer install
```
- Copiar o arquivo .env.example para .env 
- Verifiquei se as configurações do arquivo .env estão corretas

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