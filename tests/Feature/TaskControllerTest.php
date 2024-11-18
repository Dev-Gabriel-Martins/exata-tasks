<?php

namespace Tests\Feature;

use App\Models\Task;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TaskControllerTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_user_can_view_tasks()
    {
        $user = User::factory()->create();
        $tasks = Task::factory()->count(3)->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)->get(route('tasks.index'));

        $response->assertStatus(200);        
    }

    public function test_user_can_create_task()
    {
        $user = User::factory()->create();

        $data = [
            'title' => 'Nova Tarefa',
            'description' => 'Descrição da tarefa',
            'status' => 0,
            'user_id' => $user->id,
        ];

        $response = $this->actingAs($user)->post(route('tasks.store'), $data);

        $response->assertRedirect(route('tasks.index'));
        $this->assertDatabaseHas('tasks', ['title' => 'Nova Tarefa']);
    }


    public function test_user_can_update_task()
    {
        $user = User::factory()->create();
        $task = Task::factory()->create(['user_id' => $user->id]);

        $data = [
            'title' => 'Tarefa Atualizada',
            'description' => 'Descrição atualizada',
            'status' => 1,
        ];

        $response = $this->actingAs($user)->put(route('tasks.update', $task), $data);

        $response->assertRedirect(route('tasks.index'));
        $this->assertDatabaseHas('tasks', ['title' => 'Tarefa Atualizada']);
    }

    /**
     * Testa se o usuário pode deletar uma tarefa
     */
    public function test_user_can_delete_task()
    {
        $user = User::factory()->create();
        $task = Task::factory()->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)->delete(route('tasks.destroy', $task));

        $response->assertRedirect(route('tasks.index'));
        $this->assertDatabaseMissing('tasks', ['id' => $task->id]);
    }

    /**
     * Testa se um usuário sem permissão não pode acessar as tarefas de outro usuário
     */
    public function test_user_cannot_access_another_users_tasks()
    {
        $user1 = User::factory()->create();
        $user2 = User::factory()->create();
        $task = Task::factory()->create(['user_id' => $user2->id]);

        $response = $this->actingAs($user1)->get(route('tasks.index'));
        $response->assertDontSee($task->title); // O título da tarefa não deve estar presente
    }

    
}
