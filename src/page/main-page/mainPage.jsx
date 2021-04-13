import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import MainContent from '../../components/main-content/MainContent';
import { getItemList, getPrice } from '../../service/service';
import { useDispatch, useSelector } from 'react-redux';
import { setItemList, setItemPrice, setItemObj, changeLanguage, changeItemName, changeTier, changeEnhancement, changeQuality, setPrice } from '../../redux/actions';

const MainPage = () => {
  console.log('ancsdfsdgmsdkvms')
  const itemList = useSelector(state => state.itemList);
  const filters = useSelector(state => state.filters);
  const item = useSelector(state => state.itemObj);
  const dispatch = useDispatch();
  
  useEffect(() => {
    getItemList().then(data => {
      dispatch(setItemList(data));
    }).catch(error => console.error(error));
  }, [])

  
  const handleGetPrice = () => {
    if(item.UniqueName !== '' || item.UniqueName !== undefined || item.UniqueName !== null){
      getPrice(item.UniqueName, filters.quality).then(data => {
        dispatch(setItemPrice(data))
      }).catch(error => console.error(error))
    }
  }
  
  const uniqueItemName = itemList.map(item => {
    return item.UniqueName.replace(/T[1-8]_/, '').replace(/@[0-3]/, '').replaceAll('_', ' ');
  })

  const uniqueName = uniqueItemName.filter((item, index, arr) =>{
    return arr.indexOf(item) === index; 
  })

  
  const createString = () => {
    if(filters.itemName !== '' && filters.tier !== '' && filters.enhancement !== 0){
      return `${filters.tier}_${filters.itemName.replaceAll(' ', '_')}@${filters.enhancement === 0 ? '' : filters.enhancement}`
    }else if(filters.tier !== '' &&  filters.itemName !== ''){
      return `${filters.tier}_${filters.itemName.replaceAll(' ', '_')}`;
    }else if(filters.itemName !== ''){
      return `${filters.itemName}`;
    }else {
      return null;
    }
  }
  const itemObject = (string) => itemList.find(item => {
    if(string !== null){
      const itemObject = item.UniqueName.includes(string) 
      return itemObject;
    }
    return false;
  })
  const itemObjvar = itemObject(createString())
  console.log('itemObject', itemObjvar);

  const handleLanguageChange = (ln) => {
    dispatch(changeLanguage(ln));
  }
  const handleNameChange = (name) => {
    dispatch(changeItemName(name));
    // dispatch(setItemObj(itemObject(createString())))
    // handleGetPrice()
  }
  const handleTierChange = (tier) => {
    dispatch(changeTier(tier));
    // dispatch(setItemObj(itemObject(createString())))
    // handleGetPrice()
  }
  const handleEnhancementChange = (en) => {
    dispatch(changeEnhancement(en));
    dispatch(setItemObj(itemObject(createString())))
    handleGetPrice()
  }
  const handleQualityChange = (quality) => {
    dispatch(changeQuality(quality));
    handleGetPrice()
  }

  return(
    <>
      <Header 
        handleLanguageChange={handleLanguageChange} />
      <Sidebar 
        itemName={uniqueName}
        handleEnhancementChange={handleEnhancementChange}
        handleNameChange={handleNameChange}
        handleQualityChange={handleQualityChange}
        handleTierChange={handleTierChange} />
      <p>{filters.name}</p>
      <MainContent 
        filters={filters}
        item={item} />
    </>
  );
}

export default MainPage;