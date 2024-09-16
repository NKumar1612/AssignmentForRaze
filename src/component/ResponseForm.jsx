import React from 'react';
import { Form, Input, Select, Button, DatePicker, Divider, Row, Col, Checkbox } from 'antd';

const { Option } = Select;


const ResponseForm = () => {
  return (
    <Form layout="vertical" style={{ maxWidth: '800px', padding: '20px', textAlign: 'left' }}>

      {/* Basic Details */}
      <Divider>Basic Details</Divider>

      <Form.Item label="Company Name" required>
        <Input placeholder="Gadget Guru" />
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="First Name" required>
            <Input placeholder="First Name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Last Name" required>
            <Input placeholder="Last Name" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Email" required>
        <Input type="email" placeholder="Email" />
      </Form.Item>

      <Form.Item label="Phone" required>
        <Input placeholder="Phone" />
      </Form.Item>

      <Form.Item label="Address" required>
        <Input placeholder="Address" />
      </Form.Item>

      <Form.Item label="Location" required>
        <Select placeholder="Located at">
          <Option value="AP">AP</Option>
          <Option value="KA">KA</Option>
          <Option value="TN">TN</Option>
          {/* Add more locations here */}
        </Select>
      </Form.Item>

      {/* Item Details */}
      <Divider />

      {['Laptop', 'Mouse', 'Printing Ink'].map((item, index) => (
        <div key={index}>
          <Divider>Item: {item} in quantity {index === 0 ? '50 units' : index === 1 ? '75 units' : '500 L'}</Divider>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Available Quantity" required>
                <Input placeholder="Available quantity" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Supply Date" required>
                <DatePicker placeholder="Select date" style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Quoted Price" required>
            <Input placeholder="Quoted price" />
          </Form.Item>
        </div>
      ))}

      {/* Add a Comment */}
      <Form.Item label="Add a comment">
        <Input.TextArea rows={4} placeholder="Type here" />
      </Form.Item>

      <Form.Item>
        <Row justify="space-between" align="middle">
          <Col>
            <Checkbox>Send a copy of my quoted response on my mail</Checkbox>
          </Col>
          <Col>
            <Button type="primary" htmlType="submit" style={{ width: '150px' }}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form.Item>

    </Form>
    
  )
}

export default ResponseForm;