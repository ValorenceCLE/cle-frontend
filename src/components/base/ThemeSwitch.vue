<template>
  <button
    style="position: fixed; bottom: 1.5rem; right: 1rem; z-index: 9999;"
    class="p-3 rounded-full bg-white/80 dark:bg-[#23272f] shadow-lg flex items-center justify-center transition-colors duration-200 focus:outline-none"
    @click="toggleTheme"
    aria-label="Toggle dark mode"
  >
    <span v-if="isDark" class="pi pi-moon text-2xl text-gray-700 dark:text-gray-200"></span>
    <span v-else class="pi pi-sun text-2xl text-yellow-500"></span>
  </button>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme.js';

const { isDark, toggleTheme } = useTheme();
</script> 