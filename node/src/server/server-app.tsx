import { App } from '../web/app';
import { initModel } from '../web/model';

export const ServerApp = (initData: number[]) => {

  initModel(initData);

  return <App />
}