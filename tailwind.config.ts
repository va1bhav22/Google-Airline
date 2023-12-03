import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          default: '#2f45ff',
          '50': '#e8f1ff',
          '100': '#d5e4ff',
          '200': '#b3ccff',
          '300': '#85a8ff',
          '400': '#5676ff',
          '500': '#2f45ff',
          '600': '#0c0eff',
          '700': '#0000ff',
          '800': '#0609cd',
          '900': '#10169f',
          '950': '#0a0b5c',

        },
        purpleTheme: '#8c75e7',
        themeDark: '#B1336E',
        themeLight: '#2300FF',
        primary: '#27525f',
        secondary: '#1e7f9c',
        facebook: '#4267B2',
        instagram: '#bc2a8d',
        twitter: '#1da1f2',
        linkedin: '#0077b5',
        pinterest: '#E60023',
        whatsapp: '#25d366',
        youtube: '#cd201f',
        panel: '#13AF82'
      },
      fontSize: {
        small: '15px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
