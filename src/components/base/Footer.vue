<template>
  <footer :style="footerStyle" class="fixed bottom-0 left-0 w-full h-12 flex items-center justify-center text-white z-50 px-4">
    <span class="text-sm font-semibold text-center w-full">
      © 2025 Covert Law Enforcement. All Rights Reserved | Support: (435)-565-6018
    </span>
  </footer>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme.js';
import { computed } from 'vue';

const { isDark } = useTheme();
const blueGradient = 'radial-gradient(circle, rgba(30,58,138,1) 35%, rgba(10,31,68,1) 100%)';
const darkBg = '#181c20';
const footerStyle = computed(() => ({
  background: isDark.value ? darkBg : blueGradient
}));
</script>