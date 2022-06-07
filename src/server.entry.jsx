
const ReactDOMServer = require('react-dom/server')
const { readFileSync } = require('fs');
const http = require('http');
const { resolve } = require('path');



require('@babel/register')({
  presets: ['@babel/preset-react']
})

const ServerApp = require('./server/server-app.jsx')

const initData = [1, 2 ,3 ,4, 5];
const htmlStr = readFileSync(resolve(process.cwd(), './src/index.html')).toString();

const app = http.createServer((req, res) => {

  console.log(req.url)

  if (req.url.includes('entry.js')) {
    res.end(readFileSync(resolve(__dirname, './build/client.entry.js')).toString())
  }

  if (req.url === '/') {
    const html = ReactDOMServer.renderToString(
      ServerApp(initData),
    )

    console.log(html)

    const resStr = htmlStr
      .replace('__SERVER_TO_STRING__', html)
      .replace('<!-- INIT_DATA -->', `<script> window.initData=${JSON.stringify(initData)} </script>`)
      .replace('<!-- CLIENT_SCRIPT -->', '<script src="./build/client.entry.js"></script>')

    res.end(resStr)
  }

  res.end();
})

app.listen('5000', () => {
  console.log('running ...')
})