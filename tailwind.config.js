export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false, // ✅ prevents Tailwind base reset from fighting Bootstrap
  },
};
