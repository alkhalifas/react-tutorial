# React + TypeScript + Vite

## Section 1. Getting Started with NPM

- NPM: Node Package Manager
- Equivalent to Pip for Python
- Useful for creating packages from templates
- Useful for installing packages [Link](https://www.npmjs.com/)

Getting Started:
1. Install nodejs on your local computer [Link](https://nodejs.org/en/download)
2. Confirm your installation by checking the version of npm:
   
        npm --version

3. Create your react application:

        npm create vite@latest my-react-app --template react

When prompted, select React, JavaScript

4. Install the dependencies:

        cd my-react-app
        npm install
   
5. Start the application:
   
        npm run dev


## Section 2. Vite for React:


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Section 3: Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Section 4: What is React

- React is a declarative and flexible javascript framework
- React combines Javascript, HTML, and CSS into a single space
- You can learn more about Javascript here [Link](https://www.w3schools.com/js/)
- Focuses on creating UI components (small pieces of code)
- More efficient to maintain and scale your UI
- React documentation can be found here [Link](https://react.dev/)

## Section 5: Single Page Applications

- SPA: Single Page Application
- Website that loads the content once


## Section 6: Stateful Application

- React is a stateful application
- Maintains state on a component level
- Props vs State:
   - Props are similar to arguments in a function
   - State is more like a components memory
- Always think about where your state should live

## Section 7: Routing

- Routing is an important component that lets you navigate between pages

      npm install react-router-dom






