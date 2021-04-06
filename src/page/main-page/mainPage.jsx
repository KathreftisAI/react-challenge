import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import MainContent from '../../components/main-content/MainContent';
import { getItemList } from '../../service/service';
import { useDispatch, useSelector } from 'react-redux';
import { setItemList, changeLanguage, changeItemName, changeTier, changeEnhancement, changeQuality } from '../../redux/actions';

const MainPage = ({}) => {

  const itemList = useSelector(state => state.itemList);
  useEffect(() => {
    handleGetItemList();
  }, [])

  const dispatch = useDispatch();
  
  const handleGetItemList = () => {
    getItemList().then(data => {
      dispatch(setItemList(data));
    }).catch(error => console.error(error));
  }
  
  const uniqueItemName = itemList.map(item => {
    return item.UniqueName.replace(/T[1-8]_/, '').replace(/@[0-3]/, '').replaceAll('_', ' ');
  })

  const uniqueName = uniqueItemName.filter((item, index, arr) =>{
    return arr.indexOf(item) === index; 
  })

  const filters = useSelector(state => state.filters);

  const createString = () => {
    if(filters.itemName !== '' && filters.tier !== '' && filters.enhancement !== 0){
      return `${filters.tier}_${filters.itemName.replaceAll(' ', '_')}@${filters.enhancement}`
    }else if(filters.tier !== '' &&  filters.itemName !== ''){
      return `${filters.tier}_${filters.itemName.replaceAll(' ', '_')}`;
    }else if(filters.itemName !== ''){
      return `${filters.itemName}`;
    }else {
      return null;
    }
  }
  const itemObject = () => itemList.filter(item => {
    if(createString() !== null){
     return item.UniqueName.includes(createString);
    }
  })
  
  const handleLanguageChange = (ln) => {
    dispatch(changeLanguage(ln));
  }
  const handleNameChange = (name) => {
    dispatch(changeItemName(name));
    itemObject();
  }
  const handleTierChange = (tier) => {
    dispatch(changeTier(tier));
    itemObject();
  }
  const handleEnhancementChange = (en) => {
    dispatch(changeEnhancement(en));
    itemObject();
  }
  const handleQualityChange = (quality) => {
    dispatch(changeQuality(quality));
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
      <MainContent 
        language={filters.language}
        name={filters.itemName}
        tier={filters.tier}
        enhancement={filters.enhancement}
        quality={filters.quality} />
    </>
  );
}

export default MainPage;