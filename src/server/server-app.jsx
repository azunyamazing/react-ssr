const React = require('react');
const App = require('../components/app.jsx');
const { initModel } = require('../web/model.js');

const ServerApp = (initData) => {

  initModel(initData);

  return <App />
}

module.exports = ServerApp;