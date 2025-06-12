import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Material from "@primevue/themes/material";
import App from "./App.vue";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Material,
    options: {
      darkModeSelector: ".p-dark",  // enable manual dark mode toggle via this CSS selector
    }
  }
});

app.mount("#app");
