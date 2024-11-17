<?php

namespace App\Http\Controllers;

use App\Enums\TaskStatus;
use App\Models\Task;
use App\Http\Requests\Task\TaskRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class TaskController extends Controller
{    
    public function index(Request $request): Response
    {
        $query = Task::query();
            
        if (Gate::denies('admin-check')) {
            $query->where('user_id', Auth::id());
        }

        if ($request->has('status') && TaskStatus::tryFrom($request->status)) {
            $query->where('status', $request->status);
        }

        if ($request->has('sort_by')) {
            $query->orderBy($request->sort_by, 'asc');
        }

        $tasks = $query->paginate(10);

        return Inertia::render('Tasks/Index', ['tasks' => $tasks]);        
    }

    public function create(): Response
    {
        return Inertia::render('Tasks/Create');
    }

    public function store(TaskRequest $request): RedirectResponse
    {   
        
        $validated = $request->validated();        
        Task::create($validated);

        return redirect()
            ->route('tasks.index')
            ->with('success', 'Task criada com sucesso.');
    }

    public function show(Task $task): Response
    {   
        Gate::authorize('role-tasks-check', $task);

        return Inertia::render('Tasks/Show',['tasks' => $task]);
    }

    public function edit(Task $task)
    {   
        Gate::authorize('role-tasks-check', $task);

        return Inertia::render('Tasks/Edit',['tasks' => $task]);
    }

    public function update(TaskRequest $request, Task $task): RedirectResponse
    {   

        Gate::authorize('role-tasks-check', $task);

        $validated = $request->validated();

        $task->update($validated);

        return redirect()
            ->route('tasks.index')
            ->with('success', 'Task atualizada com sucesso.');
    }

    public function destroy(Task $task): RedirectResponse
    {   
        Gate::authorize('role-tasks-check', $task);

        $task->delete();

        return redirect()
            ->route('tasks.index')
            ->with('success', 'Task apagada com sucesso.');
    }
}