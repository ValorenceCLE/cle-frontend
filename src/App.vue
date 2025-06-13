<template>
  <div :class="{ 'p-dark': isDarkMode }">
    <!-- toggle .p-dark here based on state -->
    <Header :darkMode="isDarkMode" @toggle-dark="toggleDarkMode" />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
