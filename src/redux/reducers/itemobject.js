const itemObjectReducer = (state = {}, action) => {
  switch(action.type){
    case 'set_itemobj':
      return Object.assign(state, action.payload);
    default:
      return state; 
  }
}

export default itemObjectReducer;