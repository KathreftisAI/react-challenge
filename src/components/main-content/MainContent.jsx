import React from 'react';
import { Row, Col, Typography, Card, Space, Divider } from 'antd';
import './main-content.css'

const MainContent = ({ language, itemName, tier, enhancement, quality, itemObj, price }) => {

  return(
    <section className='main-content'>
      <Space direction='horizontal' align='center'>
        <img src={itemObj && itemObj.UniqueName ? `https://render.albiononline.com/v1/item/${itemObj.UniqueName}.png?quality=${quality}` : ''} />
        <Space direction='vertical'>
          <Space direction='horizontal' size='middle' align='center'>
            <Typography.Title level={2} style={{ fontSize: '21px' }}>{itemObj && itemObj.LocalizedNames ? itemObj.LocalizedNames[language] : ''}</Typography.Title>
            <Typography.Text>{tier}</Typography.Text>
          </Space>
          <Typography.Paragraph>{itemObj && itemObj.LocalizedDescriptions ? itemObj.LocalizedDescriptions[language] : ''}</Typography.Paragraph>
        </Space>
      </Space>
      <Row style={{ marginTop: '48px' }}>
        <Col lg={{ span: 11, offset: 0 }}>
          <Card 
            title='Latest Sell Price' 
            className='main-content-card'
            bodyStyle={{ padding: '72px 32px' }}>
            <Space direction='horizontal' className='card-detail'>
              <Space direction='horizontal' size='large'>
                <Typography.Text>Location</Typography.Text>
              </Space>
              <Space direction='horizontal' size='large'>
                <Typography.Text>Price</Typography.Text>
              </Space>
            </Space>
            <Divider className='card-divider' />
            {price ? price.map(p =>{
              return (
                <Space className='card-detail'>
                  <Typography.Text>{p.city}</Typography.Text>
                  <Typography.Text>{p.sell_price_max}</Typography.Text>
                </Space>);
            }): ''}
          </Card>
        </Col>
        <Col lg={{ span: 11, offset: 2 }}>
          <Card 
            title='Latest Buy Price' 
            className='main-content-card'
            bodyStyle={{ padding: '72px 32px' }}>
            <Space direction='horizontal' className='card-detail'>
              <Space direction='horizontal' size='large'>
                <Typography.Text>Location</Typography.Text>
              </Space>
              <Space direction='horizontal' size='large'>
                <Typography.Text>Price</Typography.Text>
              </Space>
            </Space>
            <Divider className='card-divider' />
            {price ? price.map(p =>{
              return (
                <Space className='card-detail'>
                  <Typography.Text>{p.city}</Typography.Text>
                  <Typography.Text>{p.buy_price_max}</Typography.Text>
                </Space>);
            }): ''}
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default MainContent;