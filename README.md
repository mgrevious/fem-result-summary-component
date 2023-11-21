# Frontend Mentor - Result Summary Component

Assignment is completed. Extracts results list from data.json and renders the list of results using JavaScript.

## package.json

`webpack-cli` is used to run webpack commands.

`webpack-dev-server` allows you to run the webpack dev server to automatically re-build and bundle code to an output folder everytime a change is made to the input file. Run `npm run dev` after the `dev` script is added to package.json

`css-loader` and `style-loader` allows us to import css files into JavaScript files

`post-loader` is used to load postcss

## Add postcss.config.js

- PostCSS is used to add vendor prefixes to CSS rules using values from Can I Use. This ensures backwards compatibility in browsers.
- Converts modern CSS into something most browsers can understand. (i.e. polyfills)
- It utilizes CSS Modules

## tailwind.config.js

- Used to configure Tailwind CSS implementation

## webpack.config.js

- Used to configure how Webpack runs scripts, bundles files, and outputs static files.
