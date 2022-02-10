## General

Amanor Operations Manager is a React.js application that follows the next.js framework and uses TypeScript.

### Run the frontend application

1. Prerequisites: Make sure your have `npm` installed.
2. Switch into this directory
3. Download necessary ressources by running in the terminal: `npm install`
4. Run `npm run dev` to start the application in development mode

### Used technologies

-   React as main lib
-   TypeScript for the whole frontend
-   eslint and prettier for collaboration and quality, run `npm run lint` regulary
-   with `husky` and `lint-staged` it is aimed to automatically lint and check code on staging/comitting (see package.json), at the moment it might not be perfectly configured ( https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project )
-   next.js as SSR Framework.

### Further information


#### Others

1. Very important: Get "prettier" installed, it is a standard code formatting. There is a "Prettier - Code formatter" extension in VS Code as well.
2. Interfaces in TypeScript: https://www.typescriptlang.org/docs/handbook/interfaces.html
