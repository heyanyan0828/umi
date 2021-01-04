import React from 'react';
import { Modal, Button } from 'antd';

const UsersModel = (props: any) => {
  return (
    <div>
      <Modal title="Basic Modal" visible={props.visible}></Modal>
    </div>
  );
};
export default UsersModel;
