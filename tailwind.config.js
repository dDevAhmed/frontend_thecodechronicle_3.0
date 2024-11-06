/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary-blue': '#4880FF',
        'brand-primary-black': '#202224',
        'brand-primary-white': '#fff',

        // light mode
        // (primary)
        'brand-soft-amber': '#F4A261',      //compliment golden of v2.0
        'brand-cream-white': '#FAF9F6',     //for backgrounds
        'brand-graphite-black': '#2C2E33',  //text and key icons

        // (secondary)
        'brand-cool-gray': '#E6E6E6',       //secondary background, cards and borders
        'brand-muted-teal': '#4A7C8B',      //interactive elements like buttons and links

        // (accent)
        'brand-vibrant-coral': '#E76F51',   //eys catching for buttons, icons, and call to action elements

        // dark mode
        // (primary)
        'brand-slate-blue': '#2D3142',      //main background
        'brand-warm-silver': '#BFC0C0',     //text
        'brand-steel-gray': '#3A3D46',      //secondary backgrounds, cards and containers

        // (secondary)
        'brand-muted-lavender': '#6C757D',  //borders, dividers
        'brand-cyan-mist': '#528B8B',       //buttons, links

        // (accent)
        'brand-blush-pink': '#D7263D',      //icons, selected buttons, 
      },
      fontFamily: {
        hanalei: ['Hanalei Fill', 'cursive'],
        // other fonts...  
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    scrollbarHide
  ],
}