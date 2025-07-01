/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require("@agentlog/config/tailwind.config.js"),
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
}; 