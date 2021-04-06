import axios from 'axios';

export const getItemList = () => {
  return new Promise((resolve, reject) => {
    axios.get('https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.json')
    .then(({ status, data }) => {
      if(status === 200){
        resolve(data)
      }
    }).catch(error => reject(error))
  })
};

export const getPrice = () => {
  return new Promise((resolve, reject) => {
    axios.get('https://www.albion-online-data.com/api/v2/stats/Prices/{itemList}.{format}')
    .then(({ status, data }) => {
      if(status === 200){
        resolve(data)
      }
    }).catch(error => reject(error))
  })
}