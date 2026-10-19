import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    // Directorios y archivos que se deben ignorar globalmente
    ignores: ['dist/', 'build/', 'node_modules/'],
  },
  {
    // Aplica la configuración a todos los archivos JavaScript
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Aquí puedes personalizar tus reglas adicionales
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'warn',
      'eqeqeq': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
    },
  },
  pluginReact.configs.flat.recommended,
]);