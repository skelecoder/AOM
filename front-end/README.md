## General

The smart-dashboard-frontend is a React.js application that follows the next.js framework and uses TypeScript.

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
-   next.js as SSR Framework (on the one hand a very good framework for development of performant react applications, on the other hand does the node.js elasticsearch-client not work browser-side, so next.js enables us to connect to elasticsearch)
-   leaflet as library for map components, Good explanation on Leaflet and Mapbox: https://stackoverflow.com/questions/12262163/what-are-leaflet-and-mapbox-and-what-are-their-differences/23663848#23663848
-   `styled-components` for custom components

### Further information

#### Styling

[/components/layout](components/layout/README.md)

#### Data and APIs

[/data](data/README.md)

#### Graphs and Recharts components

[/components/graphic-components](components/graphic-components/README.md)

#### Others

1. Very important: Get "prettier" installed, it is a standard code formatting. There is a "Prettier - Code formatter" extension in VS Code as well.
2. Interfaces in TypeScript: https://www.typescriptlang.org/docs/handbook/interfaces.html
