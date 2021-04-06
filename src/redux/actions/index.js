export const changeLanguage = (ln) => {
  return {
    type: 'change_language',
    language: ln 
  };
};

export const changeItemName = (name) => {
  return {
    type: 'change_itemName',
    itemName: name 
  };
};

export const changeTier = (tier) => {
  return {
    type: 'change_tier',
    tier: tier 
  };
};

export const changeEnhancement = (en) => {
  return {
    type: 'change_enhancement',
    enhancement: en 
  };
};

export const changeQuality = (quality) => {
  return {
    type: 'change_quality',
    quality: quality 
  };
};

export const setItemList = (itemList) => {
  return {
    type: 'set_itemlist',
    payload: itemList 
  };
};

export const setPrice = (price) => {
  return {
    type: 'set_price',
    price: price 
  };
};

export const setLocation = (location) => {
  return {
    type: 'set_location',
    location: location 
  };
};