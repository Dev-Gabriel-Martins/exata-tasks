<?php

namespace App\Http\Requests\Task;

use App\Enums\TaskStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class TaskRequest extends FormRequest
{
    public function prepareForValidation()
    {
        $this->merge([
            'user_id' => Auth::id(),
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required'],
            'status' => ['required', 'int'],
        ];
    }

    /**
     * Custom error messages.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'title.required' => 'O titulo da task é obrigatorio.',
            'description.required' => 'A descrição da task é obrigatorio.',
            'status.required' => 'O status da task é obrigatorio.',
        ];
    }
}
