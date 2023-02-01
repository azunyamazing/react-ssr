import { readFileSync } from 'fs-extra';
import chalk from 'chalk';
import { createServer } from 'http';
import { spawn } from 'child_process';
import { resolve } from 'path';
import { build as viteBuild } from 'vite'
import { render as renderServerHtml } from './src/entry-server';

const port = 2333;

// 利用 vite 打包客户端代码
// 这里只利用了 vite 的打包工具, vite 支持 ssr, 可以参考: https://cn.vitejs.dev/guide/ssr.html
const buildClientJS = async () => {
  let clientCode = '';
  try {
    const res = await viteBuild();
    if ('output' in res) {
      clientCode = res.output[0].code;
    }
    spawn('rm', ['-rf', 'dist']);
  } catch(e) {
    console.log('Error', e);
  }

  return `<script>${clientCode}</script>`;
}

;(async () => {
  const clientJS = await buildClientJS();
  createServer(async (req, res) => {
    const url = req.url;
    if (url === '/') {
      try {
        let template = readFileSync(resolve(__dirname, 'index.html'), 'utf-8');

        // 获取 react 组件编译后的 html 字符串
        const appHtml = renderServerHtml();

        // 直出数据: 初始页面数据 / 客户端代码 / 首屏 html 代码
        template = template
          .replace('<!-- __APP_HTML__ -->', appHtml)
          .replace('<script src="./src/entry-client.tsx" type="module"></script>', '')
          .replace('<!-- __INIT_DATA__ -->', '<script>window.__INIT_DATA__={ count: 233 }</script>')
          .replace('<!-- __CLIENT_JS__ -->', clientJS);

        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.write(template);
        res.end();
      } catch (e) {
        console.log(e);
      }
    }
  })
    .listen(port, () => console.log(`\n  ${chalk.greenBright('➜')}  Local:   ${chalk.cyan('http://127.0.0.1:2333/')} \n`))
})();

