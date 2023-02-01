### SSR For React

```
- index.html
- server.js # main application server
- src/
  - entry-client.js  # 将应用挂载到一个 DOM 元素上
  - entry-server.js  # 获取首屏 html 字符串
```

:hammer: 实现思路就是将首屏 html 代码和现有客户端代码进行直出, 因此需要在服务端先进行一遍组件渲染.


```bash
npm i

npm run dev # csr

npm start   # ssr
```