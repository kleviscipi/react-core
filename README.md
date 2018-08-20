## React Starter with bootstrap 4

This project is for starting app with a nice structure, and without webpack config

## Setup

`git clone https://github.com/kleviscipi/react-core.git`

`npm install`

`npm start`

The route links:

`http://localhost:3000/app`
`http://localhost:3000/login`
`http://localhost:3000/singup`


This app use react scripts for build and deploy and if you want to configure your custom goto to `package.json`

```JSON
  "scripts": {
    "build-css": "node-sass-chokidar src/assets/scss/style.scss -o src/assets/css/",
    "watch-css": "npm run build-css && node-sass-chokidar src/assets/scss/style.scss -o src/assets/css/ --watch ",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js ",
    "build": "npm run build-css && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
```


** Note
This project is used to (https://www.npmjs.com/package/create-react-starter-mvc)[https://www.npmjs.com/package/create-react-starter-mvc]

Thank You !