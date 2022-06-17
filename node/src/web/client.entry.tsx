import ReactDom from 'react-dom/client';

import { App } from './app';
import { initModel } from './model';

declare global {
  interface Window {
    initData: number[];
  }
}

const ClientApp = () => {

  initModel(window.initData);

  return <App />
}

ReactDom.hydrateRoot(
  document.getElementById('app'),
  <ClientApp />,
)