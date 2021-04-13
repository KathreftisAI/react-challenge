import React from 'react';
import { Row, Col, Typography, Card, Space, Divider } from 'antd';
import './main-content.css'

const MainContent = ({ filters, item }) => {

  return(
    <section className='main-content'>
      <Space direction='horizontal' align='center'>
        <img src={item && item.UniqueName ? `https://render.albiononline.com/v1/item/${item.UniqueName}.png?quality=${filters.quality}` : ''} />
        <Space direction='vertical'>
          <Space direction='horizontal' size='middle' align='center'>
            <Typography.Title level={2} style={{ fontSize: '21px' }}>{item && item.LocalizedNames ? item.LocalizedNames[filters.language] : ''}</Typography.Title>
            <Typography.Text>{filters.tier}</Typography.Text>
          </Space>
          <Typography.Paragraph>{item && item.LocalizedDescriptions ? item.LocalizedDescriptions[filters.language] : ''}</Typography.Paragraph>
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