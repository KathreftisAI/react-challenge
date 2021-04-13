const priceReducer = (state = [], action) => {
  switch(action.type){
    case 'set_price':
      return state = action.payload;
    default: 
      return state;
  }
}

export default priceReducer;