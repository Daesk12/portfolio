/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        page: 'var(--bg-page)',
        surface: 'var(--bg-surface)',

        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',

        title: 'var(--title-primary)',

        accent: 'var(--accent)',

        error: 'var(--error)',
        success: 'var(--success)',
      },
    },
  },
};
