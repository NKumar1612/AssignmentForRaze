import React from 'react';
import { Col, Row, Typography } from 'antd';
import RequestSummaryCard from '../../component/RequestSummaryCard';

const { Title, Text } = Typography;

const AboutRaze = () => {
  return (
    <Row gutter={[16, 16]} justify="center">
      {/* Text Content on the Left */}
      <Col 
        xs={{ span: 24, order: 1 }} 
        sm={{ span: 24, order: 1 }} 
        md={{ span: 18, order: 1 }} 
        lg={{ span: 16, order: 1 }}
      >
        <Title level={3} style={{ color: '#3a00d9'}}>About Raze</Title>
        <Text>
          Maecenas diam velit, tincidunt vitae vulputate a, efficitur ac felis. 
          Cras pellentesque at justo et malesuada. Orci varius natoque penatibus 
          et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. 
          Quisque placerat imperdiet urna, quis tincidunt nisl interdum a. Praesent 
          lobortis sem non dui viverra tincidunt. Donec et facilisis nibh. Phasellus
          rutrum diam sit amet feugiat tempus. Vivamus faucibus mauris non posuere 
          vulputate. Integer eget molestie ipsum. Proin ultrices nec nunc id vehicula. 
          Proin tortor massa, accumsan sit amet ligula id, tempor ornare ligula. Integer 
          mollis et felis et semper. In a ligula ultrices leo lobortis euismod vulputate 
          sit amet dolor. Phasellus a mollis libero.
        </Text>
      </Col>
      {/* Card on the Right */}
      <Col 
        xs={{ span: 24, order: 2 }} 
        sm={{ span: 24, order: 2 }} 
        md={{ span: 6, order: 2 }} 
        lg={{ span: 8, order: 2 }}
      >
        <RequestSummaryCard />
      </Col>
    </Row>
  );
}

export default AboutRaze;
