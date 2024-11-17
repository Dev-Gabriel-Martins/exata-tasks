<script setup>
import { reactive, ref } from 'vue';
import { Head, Link, router, } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import InputError from '@/Components/InputError.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import DangerButton from '@/Components/DangerButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import Modal from '@/Components/Modal.vue';
import Card from '@/Components/Card.vue';

const form = reactive({
    id: null,
    title: '',
    description: '',
    status: 0,
});

const errors = reactive({});
const isEditMode = ref(false);
const isModalVisible = ref(false);
const taskToDelete = ref(null);

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

const openDeleteModal = (id) => {
    taskToDelete.value = id;
    isModalVisible.value = true;
};

const confirmDeleteTask = () => {
    if (taskToDelete.value) {
        router.delete(`/tasks/${taskToDelete.value}`, {
            onSuccess: () => {
                if (form.id === taskToDelete.value) {
                    isEditMode.value = false;
                    resetForm();
                }
                isModalVisible.value = false;
                taskToDelete.value = null;
            },
            onError: (err) => {
                console.log(err);
                Object.assign(errors, err);
            },
        });
    }
};

const cancelDelete = () => {
    isModalVisible.value = false;
    taskToDelete.value = null;
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    }).format(date);
};

const filters = ref({
    status: '',
    sort_by: '',
});

const applyFilters = () => {
    const query = Object.entries(filters.value)
        .filter(([_, value]) => value)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

    window.location.search = query;
};
</script>
<template>

    <Head title="Tasks" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-900"> Tasks </h2>
        </template>

        <Card>
            <div class="flex inline items-center">
                <InputLabel for="status" value="Status:" class="mr-4" />
                <select v-model="filters.status"
                    class="rounded-md border-gray-300 shadow-sm focus:border-[#f8a200] focus:ring-[#f8a200] mr-4 ">
                    <option value="">Todos </option>
                    <option value="0">Pendente</option>
                    <option value="1">Em Andamento</option>
                    <option value="2">Concluída</option>
                </select>
                <InputLabel for="status" value="Data:" class="mr-4" />
                <select v-model="filters.sort_by"
                    class="rounded-md border-gray-300 shadow-sm focus:border-[#f8a200] focus:ring-[#f8a200] mr-4 ">
                    <option value="">Nenhum</option>
                    <option value="created_at">Criação</option>
                    <option value="updated_at">Atualização</option>
                </select>
                <Link @click="applyFilters" class="mt-2 ">Aplicar Filtros</Link>
            </div>        
        </Card>

        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid grid-cols-5 gap-3 md:grid-cols-5 lg:gap-5">
                <!--Lista-->
                <div class="col-span-3">
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
                                            Criação </th>
                                        <th
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Atualização </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200">
                                    <tr v-for="task in $page.props.tasks.data" :key="task.id"
                                        class="hover:bg-gray-100 focus:bg-gray-100">
                                        <td class="px-6 py-4" @click="selectTask(task)"> {{ task.title.length > 25 ?
                                            task.description.slice(0, 25) + '...' : task.title }}</td>
                                        <td class="px-6 py-4" @click="selectTask(task)">
                                            <span v-if="task.status === 0"
                                                class="bg-yellow-100 text-yellow-800 px-2.5 py-0.5 rounded">Pendente</span>
                                            <span v-else-if="task.status === 1"
                                                class="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded">Em
                                                Andamento</span>
                                            <span v-else
                                                class="bg-green-100 text-green-800 px-2.5 py-0.5 rounded">Concluída</span>
                                        </td>
                                        <td class="px-6 py-4" @click="selectTask(task)">{{ formatDate(task.created_at)
                                            }}</td>
                                        <td class="px-6 py-4" @click="selectTask(task)">{{ formatDate(task.updated_at)
                                            }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p v-else class="p-6 text-gray-900">Sem tarefas por enquanto</p>
                    </div>
                </div>
                <!--Fim da Lista-->
                <!-- Formulário -->
                <div class="col-span-2">
                    <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4">
                            {{ isEditMode ? 'Editar Tarefa' : 'Criar Tarefa' }}
                        </h3>
                        <form @submit.prevent="submitForm" class="w-full">
                            <div class="flex gap-5 mb-4">
                                <div class="flex-2 w-3/5">
                                    <InputLabel for="title" value="Título" />
                                    <TextInput v-model="form.title" id="title" type="text" autofocus class="w-full" />
                                    <InputError :message="errors.title" />
                                </div>
                                <div class="flex-1 w-2/5">
                                    <InputLabel for="status" value="Status" />
                                    <select v-model="form.status" id="status"
                                        class="rounded-md border-gray-300 shadow-sm focus:border-[#f8a200] focus:ring-[#f8a200] w-full">
                                        <option value="0">Pendente</option>
                                        <option value="1">Em Andamento</option>
                                        <option value="2">Concluída</option>
                                    </select>
                                    <InputError :message="errors.status" />
                                </div>
                            </div>
                            <div class="mb-4">
                                <InputLabel for="description" value="Descrição" />
                                <TextInput v-model="form.description" id="description" type="text" class="w-full" />
                                <InputError :message="errors.description" />
                            </div>
                            <div class="mt-8 flex justify-start gap-4">
                                <PrimaryButton type="submit">{{ isEditMode ? 'Atualizar' : 'Criar' }} </PrimaryButton>
                                <DangerButton v-if="isEditMode" @click="openDeleteModal(form.id)">Apagar </DangerButton>
                                <SecondaryButton v-if="isEditMode" @click="resetForm">Voltar</SecondaryButton>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- Fim do Formulário -->
            </div>
        </div>
    </AuthenticatedLayout>
    <Modal :show="isModalVisible" @close="cancelDelete" max-width="md">
        <div class="p-6">
            <h2 class="text-lg font-medium text-gray-900">Confirmação de Exclusão</h2>
            <p class="mt-4 text-sm text-gray-600">Você tem certeza que deseja excluir esta tarefa? Esta ação não pode
                ser
                desfeita.</p>
            <div class="mt-6 flex justify-end gap-4">
                <SecondaryButton @click="cancelDelete">Cancelar</SecondaryButton>
                <DangerButton @click="confirmDeleteTask">Confirmar</DangerButton>
            </div>
        </div>
    </Modal>
</template>