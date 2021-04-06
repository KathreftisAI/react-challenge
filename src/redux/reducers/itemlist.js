const itemListReducer = (state = [], action) => {
  switch(action.type){
    case 'set_itemlist':
      return state = action.payload;
    default:
      return state; 
  }
}

export default itemListReducer;