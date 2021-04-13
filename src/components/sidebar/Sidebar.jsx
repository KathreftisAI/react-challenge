import React, { useState } from 'react';
import { Select } from 'antd';
import './sidebar.css';

const Sidebar = ({ itemName, handleEnhancementChange, handleNameChange, handleQualityChange, handleTierChange }) => {

  const changeItemName = (option) => {
    handleNameChange(option);
  }

  const changeTier = (option) => {
    handleTierChange(option);
  }

  const changeEnhancement = (option) => {
    handleEnhancementChange(option);
  }

  const changeQuality = (option) => {
    handleQualityChange(option);
  }

  return(
    <section className='sidebar'>
      <Select
        className='sidebar-select'
        placeholder='Select Item'
        onChange={changeItemName}>
        {itemName.map(item => {
          return <Select.Option key={item} value={item}>{item}</Select.Option>
        })}
      </Select>
      <Select 
        className='sidebar-select'
        placeholder='Select Tier'
        onChange={changeTier}>
        <Select.Option value='T1'>T1</Select.Option>
        <Select.Option value='T2'>T2</Select.Option>
        <Select.Option value='T3'>T3</Select.Option>
        <Select.Option value='T4'>T4</Select.Option>
        <Select.Option value='T5'>T5</Select.Option>
        <Select.Option value='T6'>T6</Select.Option>
        <Select.Option value='T7'>T7</Select.Option>
        <Select.Option value='T8'>T8</Select.Option>
      </Select>
      <Select
        className='sidebar-select' 
        placeholder='Select Enhancement'
        onChange={changeEnhancement}>
        <Select.Option value={0}>0</Select.Option>
        <Select.Option value={1}>1</Select.Option>
        <Select.Option value={2}>2</Select.Option>
        <Select.Option value={3}>3</Select.Option>
      </Select>
      <Select
        className='sidebar-select'
        placeholder='Select Quality'
        onChange={changeQuality}>
        <Select.Option value={0}>Default</Select.Option>
        <Select.Option value={1}>Normal</Select.Option>
        <Select.Option value={2}>Good</Select.Option>
        <Select.Option value={3}>Outstanding</Select.Option>
        <Select.Option value={4}>Excellent</Select.Option>
        <Select.Option value={5}>Masterpiece</Select.Option>
      </Select>
    </section>
  );
}

export default Sidebar;