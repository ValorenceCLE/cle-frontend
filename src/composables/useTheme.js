import { ref } from 'vue';

const isDark = ref(false);

function toggleTheme() {
  isDark.value = !isDark.value;
  const root = document.documentElement;  // <html> element
  if (isDark.value) {
    root.classList.add('p-dark');
  } else {
    root.classList.remove('p-dark');
  }
}

export function useTheme() {
  return { isDark, toggleTheme };
}
