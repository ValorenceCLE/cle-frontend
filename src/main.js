import { createApp } from 'vue';
import App from './App.vue';

import router from '@/router';            // Vue Router 4 instance
import { createPinia } from 'pinia';      // Pinia state management

// PrimeVue setup
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura'; // Using a PrimeVue preset theme (e.g., Aura)

// Global styles
import '@/styles/main.css';   // Tailwind base styles and PrimeVue core CSS
import '@/styles/theme.css';  // Custom theme overrides (crosshatch backgrounds, etc.)

const app = createApp(App);

// Install plugins
app.use(router);
app.use(createPinia());

// Configure PrimeVue with styled theme and dark-mode support
app.use(PrimeVue, { 
    theme: {
        preset: Aura,                      // PrimeVue preset theme (includes light & dark modes):contentReference[oaicite:0]{index=0}
        options: {
            darkModeSelector: '.p-dark'    // Use .p-dark class to toggle dark mode manually:contentReference[oaicite:1]{index=1}
        }
    }
});

// (Optional) If you plan to use PrimeIcons for icons:
import 'primeicons/primeicons.css';  // PrimeVue icons (e.g., for Button icons)

// Mount the app
app.mount('#app');
