<?php
namespace Tests\Unit;

use App\Enums\TaskStatus;
use App\Models\Task;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TaskModelTest extends TestCase
{
    use RefreshDatabase;

    public function test_task_belongs_to_user()
    {
        $user = User::factory()->create(['role' =>'user']);
        $task = Task::factory()->create(['user_id' => $user->id]);

        $this->assertTrue($task->user->is($user));
    }

    public function test_task_status_defaults_to_pending()
    {
        $user = User::factory()->create(['role' =>'user']);
        $task = Task::factory()->create(['user_id' => $user->id]);

        $this->assertEquals(TaskStatus::PENDING->value, $task->status);

    }
}
