import React from 'react';
import styles from './User.css';
import { Table, Icon } from 'antd';

function User() {
  const columns = [{
    title: '姓名',
    dataIndex: 'name',

  }];

  const data = [
    {
      key: '1',
      name: 'Atticus',
    },
    {
      key: '2',
      name: 'what'
    }
  ]

  const rowSelection = {
    onSelect: function(record, selected, selectedRows) {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: function(selected, selectedRows) {
      console.log(record, selected, selectedRows);
    }
  };

  return (
    <div className='user'>
      <Table rowSelection={rowSelection} columns={ columns } dataSource={ data } />
    </div>
  );
}

export default User;
