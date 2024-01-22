import type { Config } from 'tailwindcss'

const config: Config = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { 
    colors:{
      greyish:'#ededed',
      greydark:'#333333',
      greysoft:'#cccccc',
      greyslate:'#2e2e2e',
      bluesoft:'#4d94ff',
      black:'#000000',
      white:'#fff',
      bluelight:'#cfe2f3',
      greensoft:'#c7e4c0',
      whitesoft:'#e6e6e6',
      red:"#f5425d"
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
     'vidaloka':['Vidaloka', 'serif'],
   },
    extend: {
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
