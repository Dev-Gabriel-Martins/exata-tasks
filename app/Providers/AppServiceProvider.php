<?php

namespace App\Providers;

use App\Models\Task;
use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        Gate::define('role-tasks-check', function(User $user, Task $task){
            return $user->role === 'admin' || $user->id === $task->user_id
            ? Response::allow()
            : Response::deny('Você não tem permissão de acesso');
        });

        Gate::define('admin-check', function(User $user){
            return $user->role === 'admin'
            ? Response::allow()
            : Response::deny('Você não tem permissão de acesso');
        });
    }
}
