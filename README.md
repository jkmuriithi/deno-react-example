# Deno React Example
 [![deno version](https://img.shields.io/badge/deno-^1.2.4-lightgrey?logo=deno)](https://github.com/denoland/deno)

The Create React App starting page, rebuilt for Deno using [packup](https://github.com/kt3k/packup). Feel free to fork this repo to get started with React in Deno, or make a PR to keep things up to date.

## Development
Make sure packup and a compatible version of Deno are installed before trying to work with the code in this repository.
- Run `deno task start` to start a local development server.
- Run `deno task build` to generate a build of the project.

## Current Issues
1. There is currently no way to automatically switch between development and production dependencies in packup. This means that switching from the development build of React to the production build of React requires manually editing `deps.ts`. 
1. Since packup and esbuild currently don't support SVG imports, CRA's `logo.svg` file has to be wrapped in a `Logo` component to work properly.
