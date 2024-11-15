<template>
    <button
    class="inline-flex items-center rounded-md border border-transparent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
    style="
    background-color: #f8a200;
    border-color: #f8a200;
    "
    onmouseover="this.style.backgroundColor='#d88f00'"
    onmouseout="this.style.backgroundColor='#f8a200'"
    onfocus="this.style.backgroundColor='#d88f00'"
    onactive="this.style.backgroundColor='#bf7f00'"
>
    <!-- Conteúdo do botão -->

        <slot />
    </button>
</template>
