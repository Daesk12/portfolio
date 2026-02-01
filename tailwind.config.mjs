import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        page: 'var(--bg-page)',
        surface: 'var(--bg-surface)',
        secondary: 'var(--bg-secondary)',
        accent: 'var(--accent)',

        primary: 'var(--text-primary)',
        muted: 'var(--text-secondary)',

        title: 'var(--title-primary)',
        titleMuted: 'var(--title-secondary)',

        error: 'var(--error)',
        success: 'var(--success)',
      },

      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace'],
        outfit: ['Outfit', 'sans-serif'],
      },

      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },

      lineHeight: {
        xs: '1.2',
        sm: '1.4',
        base: '1.6',
        lg: '1.8',
        xl: '2.0',
      },

      letterSpacing: {
        xs: '-0.01em',
        sm: '0.01em',
        md: '0.02em',
        lg: '0.03em',
        xl: '0.05em',
      },

      fontSize: {
        headertitle: ['clamp(8rem, 15vw, 16rem)', { lineHeight: '1' }],
        herotitle: ['clamp(3rem, 8vw, 8rem)', { lineHeight: '1' }],
        h1: ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.1' }],
        h2: ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.15' }],
        h3: ['clamp(1.5rem, 3.5vw, 2rem)', { lineHeight: '1.25' }],
        h4: ['clamp(1.25rem, 3vw, 1.5rem)', { lineHeight: '1.3' }],
        terminal: ['clamp(1.25rem, 3vw, 1.6875rem)', { lineHeight: '1.3' }],
        body: ['clamp(1rem, 1.3vw, 1.5rem)', { lineHeight: '1.6' }],
        button: ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.2' }],
        preview: ['clamp(1.75rem, 4vw, 2rem)', { lineHeight: '1.2' }],
        'preview-p': ['0.8rem', { lineHeight: '1.6' }],
        'preview-button': ['1rem', { lineHeight: '1.2' }],
        language: ['1.625rem', { lineHeight: '1.1' }],
        caption: ['1rem', { lineHeight: '1.4' }],
        author: ['0.75rem', { lineHeight: '1.3' }],
      },
    },
  },
  plugins: [typography],
};
