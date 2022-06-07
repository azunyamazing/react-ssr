const { useEffect, useLayoutEffect } = require('react');
const React = require('react');
const ReactDom = require('react-dom/client')

const App = require('../components/app.jsx')
const { initModel } = require('./model.js');

const ClientApp = () => {

  initModel(window.initData);

  return <App />
}

ReactDom.hydrateRoot(
  document.getElementById('app'),
  <ClientApp />,
)