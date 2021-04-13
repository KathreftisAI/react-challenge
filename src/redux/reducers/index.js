import { combineReducers } from 'redux';
import itemListReducer from './itemlist';
import priceReducer from './price';
import filtersReducer from './filters';
import itemObjectReducer from './itemobject';

const allReducers = combineReducers({
  filters: filtersReducer,
  itemList: itemListReducer,
  itemObj: itemObjectReducer,
  priceLocation: priceReducer
});

export default allReducers;