import React from 'react';
import { Modal, Button, Form, Input } from 'antd';

const UsersModel = (props: any) => {
  // @ts-ignore
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={props.visible}
        onOk={props.closeHandler}
        onCancel={props.closeHandler}
      >
        <Form name="basic">
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>

          <Form.Item label="Create Time" name="create time">
            <Input />
          </Form.Item>

          <Form.Item label="Status" name="status">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default UsersModel;
