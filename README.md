

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
### Crie um pequeno script .bat para ajudar na instação, ele sobe os containers, roda as migrations, seeders e testes

🚧 Necessário ter o [Docker](https://www.docker.com/) instalado. Os scripts se encontram na raiz do projeto. Será necssario liberar o acesso a porta 3306
    
- Script no Windowns: 
```cmd
./start.bat
```

#### Instalação sem script e com docker:
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
## Checklist de Backlog - Exata-tasks

**Ambiente**</br>
[✅] Configurar ambiente e repositório </br>
[✅] Implementar login com Breeze + Vue </br>

**Tarefas**</br>
[✅] Criar uma interface para criação de tarefas, com campos de título, descrição e status.</br>
[✅] Garantir que cada tarefa tenha um status: "pendente", "em andamento" ou "concluída".</br>
[✅] Utilizar migrações para criação de tabelas no banco de dados (usuários, tarefas).</br>
[✅] Implementar edição de tarefas para usuários autenticados.</br>
[✅] Implementar visualização de detalhes das tarefas.</br>
[✅] Permitir exclusão de tarefas.</br>
[✅] Deixar responsivo.</br>

**Filtros**</br>
[✅] Adicionar filtros para exibir tarefas com base no status.</br>
[✅] Adicionar ordenação de tarefas por data de criação.</br>
[✅] Adicionar ordenação de tarefas por data de atualização.</br>

**Validação**</br>
[✅] Implementar validação para campos obrigatórios.</br>
[✅] Validar comprimento e formato de entrada para o campo título.</br>
[✅] Validar que o campo status tenha um valor permitido ("pendente", "em andamento" ou "concluída").</br>
[✅] Validar que o e-mail seja único e tenha formato válido.</br>

**Permissões**</br>
[✅] Implementar roles de usuário: "comum" e "admin".</br>
[✅] Permitir que usuários comuns visualizem apenas suas próprias tarefas.</br>
[✅] Permitir que o perfil "admin" visualize todas as tarefas criadas no sistema.</br>
[✅] Criar um middleware para proteger as rotas pelo roles </br>

**Extras**</br>
[✅] Adicionar testes unitários básicos para funcionalidades principais.</br>
![image](https://github.com/user-attachments/assets/fb390978-e6f3-44b7-aebb-23103730b9cf) </br>
[✅] Configurar Docker </br>
[✅] Toast de notificação reativo, usando FlashMessage do Inertia </br>
[✅] Script de ativação </br>
[ ] DarkMode </br>



