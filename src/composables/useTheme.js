import { ref } from 'vue';

export function useTheme() {
  const isDark = ref(false);

  // Toggle the .p-dark class on the root HTML element
  function toggleTheme() {
    isDark.value = !isDark.value;
    const root = document.documentElement;  // <html> element
    if (isDark.value) {
      root.classList.add('p-dark');
    } else {
      root.classList.remove('p-dark');
    }
  }

  return { isDark, toggleTheme };
}
