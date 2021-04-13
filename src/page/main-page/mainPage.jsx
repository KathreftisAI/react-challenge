import React, { useEffect, useReducer, useState } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import MainContent from '../../components/main-content/MainContent';
import { getItemList, getPrice } from '../../service/service';

const MainPage = () => {
  const [language, setLanguage] = useState("EN-US");
  const [itemName, setItemName] = useState("");
  const [tier, setTier] = useState("");
  const [enhancement, setEnhancement] = useState(0);
  const [quality, setQuality] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [itemObj, setItemObj] = useState({});
  const [price, setPrice] = useState([]);
  
  useEffect(() => {
    getItemList().then(data => {
      setItemList(data);
    }).catch(error => console.error(error));
  }, [])

  const handleGetPrice = () => {
    if(itemObj){
      if(itemObj.UniqueName !== '' || itemObj.UniqueName !== undefined || itemObj.UniqueName !== null){
        getPrice(itemObj.UniqueName, quality).then(data => {
          setPrice(data)
        }).catch(error => console.error(error))
    }
    }
  }
  
  const uniqueItemName = itemList.map(item => {
    return item.UniqueName.replace(/T[1-8]_/, '').replace(/@[0-3]/, '').replaceAll('_', ' ');
  })

  const uniqueName = uniqueItemName.filter((item, index, arr) =>{
    return arr.indexOf(item) === index; 
  })

  
  const createString = () => {
    if(itemName !== '' && tier !== '' && enhancement !== 0){
      return `${tier}_${itemName.replaceAll(' ', '_')}@${enhancement === 0 ? '' : enhancement}`
    }else if(tier !== '' &&  itemName !== ''){
      return `${tier}_${itemName.replaceAll(' ', '_')}`;
    }else if(itemName !== ''){
      return `${itemName.replaceAll(' ', '_')}`;
    }else {
      return null;
    }
  }
  const itemObject = (string) => itemList.find(item => {
    if(string !== null){
      const itemObject = item.UniqueName.includes(string);
      return itemObject;
    }
    return false;
  })
  const itemObjvar = itemObject(createString())
  
  const handleLanguageChange = (ln) => {
    setLanguage((ln));
  }
  const handleNameChange = (name) => {
    setItemName((name));
    setItemObj(itemObjvar);
    handleGetPrice();
  }
  const handleTierChange = (tier) => {
    setTier((tier));
    setItemObj(itemObjvar);
    handleGetPrice()
  }
  const handleEnhancementChange = (en) => {
    setEnhancement((en));
    setItemObj(itemObjvar);
    handleGetPrice()
  }
  const handleQualityChange = (quality) => {
    setQuality((quality));
    handleGetPrice();
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
        language={language}
        itemName={itemName}
        tier={tier}
        enhancement={enhancement}
        quality={quality}
        itemObj={itemObj}
        price={price}
         />
    </>
  );
}

export default MainPage;