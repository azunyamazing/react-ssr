import { makeAutoObservable, reaction } from 'mobx';

export class GlobalData {

  data: number[] = []

  constructor(initData: number[]) {
    this.data = initData;
    makeAutoObservable(this, undefined, {autoBind: true})

    reaction(
      () => this.data,
      () => {
        console.log('reaction!!')
      }
    )
  }

  updateData(data: number[]) {
    this.data = data;
  }
}

let globalDataInstance: GlobalData;


export const getGlobalData = () => {
  return globalDataInstance;
}

// 初始化创建实例
export const initModel = (initData: number[]) => {
  globalDataInstance = new GlobalData(initData);
}
