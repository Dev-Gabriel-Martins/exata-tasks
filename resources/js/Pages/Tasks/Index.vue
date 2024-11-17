<script setup>
import { reactive, ref } from 'vue';
import { Head, router, Link } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import InputError from '@/Components/InputError.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import DangerButton from '@/Components/DangerButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';

const form = reactive({
    id: null,
    title: '',
    description: '',
    status: 0,
});

const errors = reactive({});
const isEditMode = ref(false);

const resetForm = () => {
    form.id = null;
    form.title = '';
    form.description = '';
    form.status = 0;
    isEditMode.value = false;
    Object.keys(errors).forEach((key) => (errors[key] = null));
};

const submitForm = () => {
    const url = isEditMode.value ? `/tasks/${form.id}` : '/tasks';
    const method = isEditMode.value ? 'put' : 'post';

    router[method](url, form, {
        onError: (err) => {
            Object.assign(errors, err);
        },
        onSuccess: () => {
            resetForm();
        },
    });
};

const selectTask = (task) => {
    form.id = task.id;
    form.title = task.title;
    form.description = task.description;
    form.status = task.status;
    isEditMode.value = true;
};

const deleteTask = (id) => {
    if (confirm('Você tem certeza que deseja apagar esta tarefa?')) {
        router.delete(`/tasks/${id}`, {
            onSuccess: () => {
                if (form.id === id) resetForm();
            },
        });
    }
};
</script>

<template>

    <Head title="Tasks" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-900"> Tasks </h2>
        </template>

        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">

            <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
                <!-- Lista de Tarefas -->
                <div>
                    <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div v-if="$page.props.tasks.data.length" class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-100">
                                    <tr>
                                        <th
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Título</th>
                                        <th
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status</th>
                                        <th
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Descrição</th>
                                        <th class="px-6 py-3"></th>                                        
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200">
                                    <tr v-for="task in $page.props.tasks.data" :key="task.id" class="hover:bg-gray-100 focus:bg-gray-100">
                                      <td class="px-6 py-4" @click="selectTask(task)"> {{ task.title }} </td> 
                                        <td class="px-6 py-4" @click="selectTask(task)">
                                            <span v-if="task.status === 0"
                                                class="bg-yellow-100 text-yellow-800 px-2.5 py-0.5 rounded">Pendente</span>
                                            <span v-else-if="task.status === 1"
                                                class="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded">Em Andamento</span>
                                            <span v-else
                                                class="bg-green-100 text-green-800 px-2.5 py-0.5 rounded">Concluída</span>
                                        </td>
                                        <td class="px-6 py-4" @click="selectTask(task)" >{{ task.description }}</td>
                                        <td class="px-6 py-4" @click="selectTask(task)"></td>                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p v-else class="p-6 text-gray-900">Sem tarefas por enquanto</p>
                    </div>
                </div>

                <!-- Formulário -->
                <div>
                    <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4">
                            {{ isEditMode ? 'Editar Tarefa' : 'Criar Tarefa' }}
                        </h3>
                        <form @submit.prevent="submitForm">
                            <div class="mb-4">
                                <InputLabel for="title" value="Título" />
                                <TextInput v-model="form.title" id="title" type="text" autofocus />
                                <InputError :message="errors.title" />
                            </div>

                            <div class="mb-4">
                                <InputLabel for="description" value="Descrição" />
                                <TextInput v-model="form.description" id="description" type="text" />
                                <InputError :message="errors.description" />
                            </div>

                            <div class="mb-4">
                                <InputLabel for="status" value="Status" />
                                <select v-model="form.status" id="status"
                                    class="rounded-md border-gray-300 shadow-sm focus:border-[#f8a200] focus:ring-[#f8a200]">
                                    <option value="0">Pendente</option>
                                    <option value="1">Em Andamento</option>
                                    <option value="2">Concluída</option>
                                </select>
                                <InputError :message="errors.status" />
                            </div>

                            <div class="mt-8 flex justify-start gap-4">
                                <PrimaryButton type="submit">{{ isEditMode ? 'Atualizar' : 'Criar' }}</PrimaryButton>
                                <DangerButton v-if="isEditMode" @click="deleteTask(form.id)">Apagar</DangerButton>
                                <SecondaryButton v-if="isEditMode" @click="resetForm">Voltar</SecondaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
