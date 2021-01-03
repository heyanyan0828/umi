import React from 'react';
import { Table, Tag, Space, Modal, Button } from 'antd';
import { connect } from '@@/plugin-dva/exports';
// import {connect} from 'umi'

// function index(users) {
//
// }
// const index = (props:any) =>{
const index = ({ data }: any) => {
  // console.log(props)

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
          <a>Edit</a>&nbsp;&nbsp;&nbsp;
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

  return (
    <div className="list-table">
      <Table columns={columns} dataSource={data} />
      <Modal title="Basic Modal" visible={false}></Modal>
    </div>
  );
};
//
// function mapStateToProps(users){
// 映射 state 成为 props 属性
// }
// const  mapStateToProps = ({users}:any)=>{
//   console.log(users);
//   return{
//     users
//   }
// }

//

// connect(function)(function)

export default connect(function (allModels: any) {
  console.log(allModels.users);
  return allModels.users;
})(index);
