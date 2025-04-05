/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontSize: {
          'tiny': '0.7rem',       // Custom tiny size
          'small': '1.2rem',      // Custom small size
          'medium': '2rem',
          'normal' :'3rem ' ,  // Custom medium size
          'large': '3.5rem',      // Custom large size
          'huge': '4rem',       // Custom huge size
        },
        // colors: {
        //   //  primary: '#ffffff',
        //   secondary: '#FF6F61',
        //   background: '#F7F7F7',
        //   cardColor: '#FFFFFF',
        //   textColor: '#333333',
        //   accentColor: '#E91E63',
        //   hoverColor: '#301934',
        // },
    
    },
  },
  plugins: [],
}

