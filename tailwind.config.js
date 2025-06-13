/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '.p-dark'],  // Use .p-dark class to trigger Tailwind's dark variants:contentReference[oaicite:9]{index=9}
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // (Optional) add custom colors, fontSizes, etc., or leave empty for now.
    }
  },
  plugins: [
    // e.g., require('@tailwindcss/forms') if using, or others; none by default.
  ]
};
