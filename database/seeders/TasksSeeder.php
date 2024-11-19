<?php

namespace Database\Seeders;

use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class TasksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'name' => 'Gabriel',
            'email' => 'teste@teste.com',            
            'password' => Hash::make('teste123'),
            'role' => 'user',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        Task::create([
            'title' => 'Criar testes unitários', 
            'description' => 'Adicionar testes unitários com PHPUnit',
            'status' => 2,
            'user_id' => $user->id,
        ]);
        
        Task::create([
            'title' => 'Gate e Middleware',
            'description' => 'Implementar sistema de permissão baseado na role do usuário', 
            'status' => 2,
            'user_id' => $user->id,
        ]);
        
        Task::create([
            'title' => 'Interface reativa com Vue', 
            'description' => 'Criar um fluxo simples e dinâmico para o CRUD das Tasks', 
            'status' => 2,
            'user_id' => $user->id,
        ]);
        
        Task::create([
            'title' => 'Validação usando classe Request',
            'description' => 'Usar FormRequest para separar as validações da Controller',
            'status' => 2,
            'user_id' => $user->id,
        ]);
        
        Task::create([
            'title' => 'Configurar ambiente',
            'description' => 'Criar projeto MVC com Laravel 11 e Vue 3 com Inertia', 
            'status' => 2,
            'user_id' => $user->id,
        ]);
        
    }
}
