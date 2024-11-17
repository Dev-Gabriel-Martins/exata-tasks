<?php

namespace App\Enums;

enum TaskStatus: int
{
    case PENDING = 0;       
    case IN_PROGRESS = 1;   
    case COMPLETED = 2;   
    
    public function label(): string
    {
        return match ($this) {
            self::PENDING => 'Pendente',
            self::IN_PROGRESS => 'Em Andamento',
            self::COMPLETED => 'Concluída',
        };
    }
}
