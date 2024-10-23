# Tailwind CSS

## Installation for the react steps as below:-
-npm install -D tailwindcss postcss autoprefixer
-npx tailwindcss init -p
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
