<?php


namespace Tests\Unit;

use App\Enums\TaskStatus;
use PHPUnit\Framework\TestCase;

class TaskStatusTest extends TestCase
{
    public function test_enum_contains_valid_values()
    {
        $this->assertEquals(0, TaskStatus::PENDING->value);
        $this->assertEquals(1, TaskStatus::IN_PROGRESS->value);
        $this->assertEquals(2, TaskStatus::COMPLETED->value);
    }

    public function test_enum_has_correct_labels()
    {
        $this->assertEquals('Pendente', TaskStatus::PENDING->label());
        $this->assertEquals('Em Andamento', TaskStatus::IN_PROGRESS->label());
        $this->assertEquals('Concluída', TaskStatus::COMPLETED->label());
    }
}