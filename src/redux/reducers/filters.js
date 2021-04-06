const initialState = {
  language: 'EN-US',
  itemName: '',
  tier: '',
  enhancement: 0,
  quality: 0
}
const filtersReducer = (state = initialState, action) => {
  switch(action.type){
    case 'change_language': 
      return Object.assign(state, { language: action.language })
    case 'change_itemName': 
      return Object.assign(state, { itemName: action.itemName });
    case 'change_tier': 
      return Object.assign(state, { tier: action.tier });
    case 'change_enhancement': 
      return Object.assign(state, { enhancement: action.enhancement })
    case 'change_quality': 
      return Object.assign(state, { quality: action.quality });
    default:
      return state;
  }
}

export default filtersReducer;