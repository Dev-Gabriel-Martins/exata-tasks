<script setup>
import Card from '@/Components/Card.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import Pagination from '@/Components/Pagination.vue';


</script>

<template>

    <Head title="Tasks" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-900"> Tasks </h2>
        </template>

        <div class="mt-12">
            <Card><!-- Filtros Start -->
                <Link :href="route('tasks.create')" class="text-[#f8a200] hover:text-blue-900">
                Criar Tasks
                </Link>
            </Card>

            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">

                    <template v-if="$page.props.tasks.data.length">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Título
                                    </th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Descrição
                                    </th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th
                                        class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                       
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="task in $page.props.tasks.data" :key="task.id">
                                    <td class="px-6 py-4 text-sm text-gray-900">{{ task.title }}</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        {{ task.description ?? 'Sem descrição' }}
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-900">
                                        <span v-if="task.status === 0"
                                            class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Pendente</span>
                                        <span v-else-if="task.status === 1"
                                            class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Em
                                            Andamento</span>
                                        <span v-else
                                            class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">Concluída</span>
                                    </td>
                                    <td class="px-6 py-4 text-right text-sm font-medium">
                                        <Link :href="route('tasks.edit', task.id)"
                                            class="mr-3 text-blue-600 hover:text-blue-900">
                                        Editar
                                        </Link>
                                        <Link :href="route('tasks.destroy', task.id)"
                                            class="mr-3 text-red-600 hover:text-red-900">
                                        Deletar
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </template>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
