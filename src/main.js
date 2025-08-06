import { createApp } from 'vue';
import App from './App.vue';

import router from '@/router';            // Vue Router 4 instance
import { createPinia } from 'pinia';      // Pinia state management

// PrimeVue setup
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura'; // Using a PrimeVue preset theme (e.g., Aura)

// Global styles
import '@/styles/main.css';   // Crosshatch Backgrounds, Tailwind base styles and PrimeVue core CSS

const app = createApp(App);

// Install plugins
app.use(router);
app.use(createPinia());

// Configure PrimeVue with styled theme and dark-mode support
app.use(PrimeVue, { 
    theme: {
        preset: Aura,                      
        options: {
            darkModeSelector: '.p-dark'
        }
    }
});

// (Optional) If you plan to use PrimeIcons for icons:
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

// Mount the app
app.mount('#app');
