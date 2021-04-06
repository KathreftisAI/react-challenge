import React, { useState } from 'react';
import { Select, Typography } from 'antd';
import './header.css'

const Header = ({ handleLanguageChange }) => {

  const [language, setLanguage] = useState('EN-US');
  const changeLanguage = (option) => {
    setLanguage(option);
    handleLanguageChange(option);
  }

  return(
    <header className='header'>
      <Typography.Title level={1} style={{ fontSize: '24px' }}>MARKETPLACE WATCH</Typography.Title>
      <Select 
        value={language} 
        onChange={changeLanguage} 
        placeholder='Select Language'>
        <Select.Option value='EN-US'>EN-US</Select.Option>
        <Select.Option value='DE-DE'>DE-DE</Select.Option>
        <Select.Option value='FR-FR'>FR-FR</Select.Option>
        <Select.Option value='PL-PL'>PL-PL</Select.Option>
        <Select.Option value='ES-ES'>ES-ES</Select.Option>
        <Select.Option value='PT-BR'>PT-BR</Select.Option>
        <Select.Option value='ZH-CN'>ZH-CN</Select.Option>
        <Select.Option value='KO-KR'>KO-KR</Select.Option>
      </Select>
    </header>
    
  );
}

export default Header;