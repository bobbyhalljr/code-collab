import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#0ea5e9',
        primaryHover: '#0284c7 ',
        secondaryHover: '#0891b2 ',
        secondary: '#06b6d4',
        lightGray: '#cbd5e1',
        darkGray: '#64748b'
        // Add more colors as needed
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        // Add more font families as needed
      },
      spacing: {
        2: '0.5rem',
        4: '1rem',
        8: '2rem',
        // Add more spacing values as needed
      },
    },
  },
  plugins: [],
}
export default config
