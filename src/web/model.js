const { makeAutoObservable, reaction } = require('mobx')

class GlobalData {

  data = []

  constructor(initData) {

    this.data = initData;

    makeAutoObservable(this, undefined, {autoBind: true})

    reaction(
      () => this.data,
      () => {
        console.log('reaction!!')
      }
    )
  }

  updateData(data) {
    this.data = data;
  }
}

let globalDataInstance

const getGlobalData = () => {
  return globalDataInstance;
}

const initModel = (initData) => {
  globalDataInstance = new GlobalData(initData);
}

module.exports = {
  initModel,
  getGlobalData
};