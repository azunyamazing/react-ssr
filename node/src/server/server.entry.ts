
import ReactDOMServer from 'react-dom/server';
import { readFileSync } from 'fs';
import http from 'http';
import { resolve } from 'path';

import { ServerApp } from './server-app';

const htmlStr = readFileSync(resolve(process.cwd(), './src/index.html')).toString();

const initData = [1, 2, 3, 4, 5];
const clientEntryPath = resolve(__dirname, '../../build/client.entry.js');

const app = http.createServer(async (req, res) => {

  console.log(req.url)

  if (req.url.includes('client.entry.js')) {
    res.end(readFileSync(clientEntryPath).toString());
  }

  if (req.url === '/') {
    const html = ReactDOMServer.renderToString(
      ServerApp(initData),
    )

    console.log('html', html);

    res.end(
      htmlStr
      .replace('__SERVER_TO_STRING__', html)
      .replace('<!-- INIT_DATA -->', `<script> window.initData=${JSON.stringify(initData)} </script>`)
      .replace('<!-- CLIENT_SCRIPT -->', '<script src="./build/client.entry.js"></script>')
    )
  }

  res.end();
})

app.listen('5000', () => {
  console.log('running ...')
})