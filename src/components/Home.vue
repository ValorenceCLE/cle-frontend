<template>
  <section class="flex flex-col items-center justify-center min-h-[60vh] w-full max-w-xl mx-auto text-center">
    <h1 class="text-2xl font-bold mb-4">Welcome to the PrimeVue App!</h1>
    <p class="mb-4">This is your Home page. Start building your app here.</p>
    <Button label="PrimeVue Button" icon="pi pi-check" class="p-button-success" />
  </section>
</template>

<script setup>
// Import the PrimeVue Button component
import Button from 'primevue/button';
</script>

<style scoped>
/* Add any Home-specific styles here */
</style> 