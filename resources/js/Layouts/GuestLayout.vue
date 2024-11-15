<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import ApplicationTitle from '@/Components/ApplicationTitle.vue';

</script>

<template>
    <div
        class="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0 bg-cover bg-center"
        style="background-image: url('img/backgrounds/bg-exata.jpg');"
    >
               
        <div class="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg sm:mt-15 lg:self-end lg:mr-60">            
            <div class="mb-3 flex items-center space-x-4">                
                <ApplicationTitle />
            </div>
            <slot />
        </div>

    </div>
</template>
