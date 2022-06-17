
export interface GetDataResult {
  checkout: {
    title: string;
    time: string;
  }
}

export const getData = async () => {

  return {
    checkout: {
      title: 'checkout',
      time: new Date().getTime().toString(),
    }
  }
}