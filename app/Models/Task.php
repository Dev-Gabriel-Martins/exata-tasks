<?php

namespace App\Models;

use App\Enums\TaskStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Task extends Model
{
    protected $fillable = [
        'title',
        'description',
        'status',
        'user_id'
    ];

    protected $casts = [
        'status' => TaskStatus::class
    ];

    protected static function boot()
     {
         parent::boot();

         static::creating(function ($data) {            
            $data->user_id = Auth::id();
         });
    }

}
