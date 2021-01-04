import React from 'react';
import { Modal, Button } from 'antd';

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
        {JSON.stringify(props.record)}
      </Modal>
    </div>
  );
};
export default UsersModel;
