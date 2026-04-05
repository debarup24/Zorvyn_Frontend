# Zorvyn Frontend Assignment

- [🔗 Live Preview](https://react.dev/learn/react-compiler/)

Techstack :

- React.js + TypeScript + TailwindCSS + Framer Motion + Recharts

## Features

- Dashboard Overview with Summary Cards (Reusable StatCards)
- Time Based Visualization (Monthly Income or Expense, Balance Trend)
- Categorical Visualization (Income Source Breakdown, Spending Breakdown)
- Data Comparison Visualization - Income vs Expense graph
- Role Based UI (Viewer and Admin)
- Transaction List with Details : Integrated Mock API
- Implemented pagination in transaction lists
- Transaction Search : Implemented Debounce search
- Handled Layout Shift with Shimmer or Loading effect
- Insights Section
- State Management with Context API as less data to handle
- Responsive Design with Animations

## Coding Approach

- Highly focused on Code Reusability by creating reusable components such as StatCards (src/UI/cards/StatCards), Modals (src/UI/modals) etc.
- Focus on writing readable & maintainable code by creating proper folder and file structure with reusable functions (e.g, created custom hooks (src/hook/useDebounce.ts) )
- Avoid using any 3rd party UI library (like shadcnUI) instead created similar in-house UI components (e.g, src/UI/buttons/ActionBTN.tsx)

# Setup - React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
