import React from 'react';
import { Row, Col, Typography, Card, Space, Divider } from 'antd';
import './main-content.css'

const MainContent = ({ name, enhancement, quality, tier }) => {
  return(
    <section className='main-content'>
      <Space direction='horizontal' align='center'>
        <img src={`https://render.albiononline.com/v1/item/${tier}_${name}.png?quality=${quality}`} />
        <Space direction='vertical'>
          <Space direction='horizontal' size='middle' align='center'>
            <Typography.Title level={2} style={{ fontSize: '21px' }}>{name}</Typography.Title>
            <Typography.Text>{tier}</Typography.Text>
          </Space>
          <Typography.Paragraph>skdvnksnvksndkv vksdnvnsdkvn</Typography.Paragraph>
        </Space>
      </Space>
      <Row style={{ marginTop: '48px' }}>
        <Col lg={{ span: 11, offset: 0 }}>
          <Card 
            title='Latest Buy Price' 
            className='main-content-card'
            bodyStyle={{ padding: '72px 32px' }}>
            <Space direction='horizontal' className='card-detail'>
              <Space direction='horizontal' size='large'>
                <Typography.Text>Location</Typography.Text>
                <Typography.Text>Location</Typography.Text>
              </Space>
              <Space direction='horizontal' size='large'>
                <Typography.Text>Price</Typography.Text>
                <Typography.Text>Price</Typography.Text>
              </Space>
            </Space>
            <Divider className='card-divider' />
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
                <Typography.Text>Location</Typography.Text>
              </Space>
              <Space direction='horizontal' size='large'>
                <Typography.Text>Price</Typography.Text>
                <Typography.Text>Price</Typography.Text>
              </Space>
            </Space>
            <Divider className='card-divider' />
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default MainContent;