// prettier.config.js

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  plugins: ["prettier-plugin-tailwindcss"],
  "tailwindStylesheet": "./src/app/global.css"
};

export default config;