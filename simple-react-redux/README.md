--criar projeto
mkdir 'nome-projeto'
cd 'nome-projeto'
npm init



--Instalando o webpack e baixando o node_modules
npm i webpack -S


--config o webpack
touch webpack.config.js
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;

--cria um arquivo ./src/client/appindex.jsx e a pasta ./src/client/public
--dentro do arquivo coloca
console.log('Hello World!');

--executando o build para o webpack converter .jsx em js na pasta public
./node_modules/.bin/webpack -d

--criar um arquivo ./src/client/index.html
<html>
  <head>
    <meta charset="utf-8">
    <title>React.js using NPM, Babel6 and Webpack</title>
  </head>
  <body>
    <div id="app" />
    <script src="public/bundle.js" type="text/javascript"></script>
  </body>
</html>


--se for no browser ele  exibe o log



--Instalando o babel
npm i babel-loader babel-core babel-preset-es2015 babel-preset-react -S

--criando o arquivo de config do babel para ele usar os plugins de ES6 e JSX
touch .babelrc
-- com isso:
{
  "presets" : ["es2015", "react"]
}

--alterando o webpack.config.js para usar o babel no build
// Existing Code ....
var config = {
  // Existing Code ....
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
}

--instalando o react
npm i react react-dom -S



-alterando nossa classe ./src/client/app/index.jsx
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('app'));


--buildando novamente
./node_modules/.bin/webpack -d --watch

--melhorado o build do webpack
{
  // ...
  "scripts": {
    "dev": "webpack -d --watch",
    "build" : "webpack -p"
  },
  // ...
}

--agora podemos usar no terminal:
npm run dev


