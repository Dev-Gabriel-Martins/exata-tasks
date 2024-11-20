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
        $query = Task::query()->with('user');

        $allowedSortFields = ['created_at', 'updated_at'];
        $allowedStatusFields = [0,1,2];

        if (Gate::denies('admin-check')) {
            $query->where('user_id', Auth::id());
        }
        
        if ($request->has('status') && in_array($request->status, $allowedStatusFields, true)) {
            $query->where('status', $request->status);
        }
        
        if ($request->has('sort_by') && in_array($request->sort_by, $allowedSortFields, true)) {
            $query->orderBy($request->sort_by, 'desc');
        }

        $tasks = $query->paginate(100);

        return Inertia::render('Tasks/Index', ['tasks' => $tasks]);
    }

    public function store(TaskRequest $request): RedirectResponse
    {

        $validated = $request->validated();

        $validated['user_id'] = Auth::id();

        Task::create($validated);

        return redirect()
            ->route('tasks.index')
            ->with('message', 'Task criada com sucesso.');
    }

    public function update(TaskRequest $request, Task $task): RedirectResponse
    {

        Gate::authorize('role-tasks-check', $task);

        $validated = $request->validated();                

        $task->update($validated);

        return redirect()
            ->route('tasks.index')
            ->with('message', 'Task atualizada com sucesso.');
    }

    public function destroy(Task $task): RedirectResponse
    {
        Gate::authorize('role-tasks-check', $task);

        $task->delete();

        return redirect()
            ->route('tasks.index')
            ->with('message', 'Task apagada com sucesso.');
    }
}
