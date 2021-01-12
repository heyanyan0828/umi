import { connect } from '@@/plugin-dva/exports';
import React, { useState } from 'react';
import UsersModel from '@/pages/users/components/UserModal';
import { Table, Tag, Space, Modal } from 'antd';
// import {connect} from 'umi'

// function index(users) {
//
// }
// const index = (props:any) =>{
const index = (props: any) => {
  //property
  // console.log(props,"000")
  const [modelVisible, setModelVisible] = useState(false);
  const [record, setRecord] = useState(undefined);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: React.ReactNode) => <a>{text}</a>,
    },
    {
      title: 'Create_Time',
      dataIndex: 'Create_Time',
      key: 'Create_Time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: { name: React.ReactNode }) => (
        <div>
          <a
            onClick={() => {
              editHandler(record);
            }}
          >
            Edit
          </a>
          &nbsp;&nbsp;&nbsp;
          <a>Delete</a>
        </div>
      ),
    },
  ];

  // const data = [ //字段
  //   {id:1,name:'zhangsan',Create_Time:'2021-01-03'},
  //   {id:2,name:'lisi',Create_Time:'2021-01-04'},
  //   {id:3,name:'wangwu',Create_Time:'2021-01-05'},
  //   ];
  //
  const editHandler = (record: any) => {
    setModelVisible(true);
    setRecord(record);
  };
  const closeHandler = () => {
    setModelVisible(false);
  };
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <div className="list-table">
      <Table columns={columns} dataSource={props.data} rowKey="id" />
      <UsersModel
        visible={modelVisible}
        closeHandler={closeHandler}
        record={record}
      ></UsersModel>
    </div>
  );
};
// //
// // function mapStateToProps(users){
// 映射 state 成为 props 属性
// }
// const  mapStateToProps = ({users}:any)=>{
//   console.log(users);
//   return{
//     users
//   }
// }
// connect(function)(function)

export default connect(function (allModels: any) {
  // console.log(allModels.users);
  return allModels.users; // {data:[...],meta:{}}
})(index);
