import React, { useEffect } from 'react';
import { Modal, Button, Form, Input } from 'antd';

const UsersModel = (props: any) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(props.record);
  }, [props.visible]);
  console.log(props.record);

  // @ts-ignore
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={props.visible}
        onOk={props.closeHandler}
        onCancel={props.closeHandler}
        forceRender
      >
        <Form name="basic" form={form}>
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

          <Form.Item label="ID" name="id">
            <Input />
          </Form.Item>

          <Form.Item label="Create Time" name="Create_Time">
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
