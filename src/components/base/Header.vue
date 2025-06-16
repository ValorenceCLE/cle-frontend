<template>
  <header :style="headerStyle" class="fixed top-0 left-0 w-full h-14 flex items-center justify-between px-4 text-white z-50">
    <div class="flex items-center">
      <img :src="logoSrc" alt="Covert Law Enforcement" class="h-8 w-[160px] object-contain m-2" />
    </div>
    <nav class="flex items-center justify-right space-x-6">
      <a href="/" class="hover:underline">Home</a>
      <a href="#" class="hover:underline">Help</a>
      <a href="#" class="hover:underline">Logout</a>
    </nav>
  </header>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme.js';
import cleDark from '@/assets/cle-dark.png';
import { computed } from 'vue';

const { isDark } = useTheme();
const logoSrc = computed(() => cleDark);

const blueGradient = 'radial-gradient(circle, rgba(30,58,138,1) 35%, rgba(10,31,68,1) 100%)';
const darkBg = '#181c20';
const headerStyle = computed(() => ({
  background: isDark.value ? darkBg : blueGradient
}));
</script> 