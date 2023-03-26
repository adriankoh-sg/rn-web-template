# React Native for Web App

This project template is created using React Native as the coding language which also caters for Web Application.
It was install using `npx react-native init` and then configured with `react-scripts` for web development.
The UI stack used is from [NativeBase](https://nativebase.io/). This UI library also supports for web.

## Reason for this setup

As I worked more on mobile development these days, sometimes when I go back to web development. There are certain stuff that I need to recall everytime I am back to web development.
Therefore I decided to create this template so that while I maintain the 'mobile' style of coding, I could also use the same code to deploy for WEB.
Nice!!!

### development dependenices

These are the dev tools that I always use. So I include this in the template for future reference.

- typescript
- eslint
- prettier

## Setup the App

After cloning from the repo. Install all dependenices.

```bash
npm install
```

## To run in WEB

```bash
npm run web
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To run for Mobile

First start the metro

```bash
npm start
```

### Run Android

```bash
npm run android
```

### Run iOS

```bash
npm run ios
```

## Builds WEB App for production

```bash
npm run build:web
```

Builds the app for production to the `build` folder.

## Project Structure

Descibe the folder structure used for this project.

- `src` main folder that contains all the source code for this project
- `src/assets` contain all the assets require for the App
- `src/components` common components use by all pages in the App
- `src/config` App configurations
- `src/views` contain all the pages/screens for the App
- `src/service` contain all the required API services needed for the App
- `src/store` contain all the redux state
- `src/utils` contain utilities functions for the App

## Libraries use for this project that works for native and WEB

- UI: [NativeBase](https://nativebase.io/)
- Navigation: [React Navigation](https://reactnavigation.org/docs/getting-started)

## Reference with thanks to the community

- [https://aureliomerenda.medium.com/create-a-native-web-app-with-react-native-web-419acac86b82](https://aureliomerenda.medium.com/create-a-native-web-app-with-react-native-web-419acac86b82)
- [https://mmazzarolo.com/blog/2020-10-24-adding-react-native-web/](https://mmazzarolo.com/blog/2020-10-24-adding-react-native-web/)
