# Tailwind CSS

## Installation for React

Follow these steps to set up Tailwind CSS in your React project:

### Step 1: Install Tailwind CSS, PostCSS, and Autoprefixer

Run the following command to install Tailwind CSS along with `postcss` and `autoprefixer`:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
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
/** index.css **/
@tailwind base;
@tailwind components;
@tailwind utilities;
