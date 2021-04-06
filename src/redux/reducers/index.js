import { combineReducers } from 'redux';
import itemListReducer from './itemlist';
import priceReducer from './price';
import filtersReducer from './filters';

const allReducers = combineReducers({
  filters: filtersReducer,
  itemList: itemListReducer,
  priceLocation: priceReducer
});

export default allReducers;