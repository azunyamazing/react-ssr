import { makeAutoObservable, ObservableMap } from "mobx";
import { GetDataResult } from "../server";


export default class Store {

  data: GetDataResult

  constructor(initData: GetDataResult) {

    this.data = initData;

    makeAutoObservable(this, undefined, {
      autoBind: true,
    })
  }
}

let models: ObservableMap;

export const initModel = (data: GetDataResult) => {
  models = new ObservableMap({
    main: new Store(data),
  })
}

export const getModel = <T>(key: string): T => {
  return models.get(key);
}

export const getMain = () => {
  return getModel<Store>('main');
}
