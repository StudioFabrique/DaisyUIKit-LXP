/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          '.btn': {
            'border-radius': '12px',
          },
          '.badge': {
            'border-radius': '7px',
            'height':'1.5rem',
          },
        }
      },
      "dark",
      "dracula",
      "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury",  "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
      {
        mytheme: {
          primary: '#6419E6',
          secondary: '#D926A9',
          accent: '#1FB2A6',
          neutral: '#191D24',
          'base-100': '#2A303C',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272'
        }
      }
    ]
  },
  plugins: [require('daisyui'), require('@tailwindcss/container-queries')]
};
