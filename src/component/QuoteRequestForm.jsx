import React from 'react';
import { Form, Input, DatePicker, InputNumber, Button, Table, Space } from 'antd';

function QuoteRequestForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  const columns = [
    {
      title: 'Item',
      dataIndex: 'item',
      key: 'item',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Budget Range',
      dataIndex: 'budgetRange',
      key: 'budgetRange',
    },
  ];

  const data = [
    {
      key: '1',
      item: 'Laptop',
      quantity: 50,
      budgetRange: '₹10,00,000-20,00,000',
    },
    {
      key: '2',
      item: 'Mouse',
      quantity: 75,
      budgetRange: '₹1,50,000-₹3,00,000',
    },
    {
      key: '3',
      item: 'Printing Ink',
      quantity: 500,
      budgetRange: '₹1,00,000-₹2,00,000',
    },
  ];

  return (
    <Form form={form} onFinish={onFinish}>
      <Table dataSource={data} columns={columns} />

      <Table dataSource={[
        { key: 1, label: 'Places of Supply', value: 'Mumbai, Thane' },
        { key: 2, label: 'Due Date', value: '15th October 2023' },
        { key: 3, label: 'Supply Date', value: '10th November 2023' },
        { key: 4, label: 'Template URL', value: 'http://dfaisjdo.dskfosw=p=ewdqwddxsds\'we[656demfcjid0qwlI,cdczcidsjff-5tyqCFlowstype=design&nodeid=3498-7wds6' },
        { key: 5, label: 'Description', value: 'This is long text to show description if any. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'   
 },
      ]} columns={[
        { title: '', dataIndex: 'label', key: 'label', width: '20%', style: { padding: '10px' } },
        { title: '', dataIndex: 'value', key: 'value', width: '80%', style: { padding: '10px' } },
      ]} style={{ marginTop: 20 }} />

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit Quote
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default QuoteRequestForm;