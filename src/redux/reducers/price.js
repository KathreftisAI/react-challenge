const initialState = {
  location: '',
  price: ''
};

const priceReducer = (state = initialState, action) => {
  switch(action.type){
    case 'set_price':
      return Object.assign(state, { price: action.price })
    case 'set_location': 
      return Object.assign(state, { location: action.location });
    default: 
      return state;
  }
}

export default priceReducer;