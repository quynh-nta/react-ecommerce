/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], //Tailwind CSS will scan these files for class names to generate the necessary styles
  darkMode: "class", // enables dark mode
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        lora: ["Lora", "sans-serif"],
      },
    },
  },
  plugins: [],
};

{/* <html class="dark">
  <body class="dark:bg-slate-800">
    <!-- Your content here -->
  </body>
</html> */}
