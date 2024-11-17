<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    links: Array,
    meta: Object,
});
</script>


<template>
    <nav class="flex items-center justify-between">
        <div v-if="links.length" class="flex-1 flex justify-between sm:hidden">
            <Link
                v-for="(link, i) in links"
                :key="i"
                :href="link.url"
                :class="[
                    'px-4 py-2 text-sm font-medium',
                    link.active ? 'bg-gray-300' : 'text-gray-700',
                ]"
                v-html="link.label"
            ></Link>
        </div>

        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700">
                    Mostrando
                    <span class="font-medium">{{ meta.from }}</span>
                    até
                    <span class="font-medium">{{ meta.to }}</span>
                    de
                    <span class="font-medium">{{ meta.total }}</span>
                    tarefas
                </p>
            </div>
            <div>
                <ul class="pagination flex">
                    <li
                        v-for="(link, i) in links"
                        :key="i"
                        :class="['px-3 py-1 border', link.active ? 'bg-gray-300' : '']"
                    >
                        <Link v-if="link.url" :href="link.url" v-html="link.label" />
                        <span v-else v-html="link.label" />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

