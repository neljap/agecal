/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coly: "hsl(0, 0%, 94%)",
        purlor: "hsl(259, 100%, 65%)",
      },
    },
  },
  plugins: [],
};
