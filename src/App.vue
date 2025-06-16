<template>
  <div class="flex flex-col min-h-screen bg-transparent">
    <BaseHeader />
    <main class="flex-grow flex items-center justify-center">
      <router-view />
    </main>
    <BaseFooter />
    <ThemeSwitch />
  </div>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'
import BaseHeader from '@/components/base/Header.vue'
import BaseFooter from '@/components/base/Footer.vue'
import ThemeSwitch from '@/components/base/ThemeSwitch.vue'

const { isDark } = useTheme()
</script>

<style>
body {
  background: transparent;
}
</style>