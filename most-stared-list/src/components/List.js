import React from 'react'
import { Table, Spin } from 'antd'
import { prop } from 'ramda'

export const compare = (a, b) => {
  if (a.name > b.name) {
      return -1
  }
  if (b.name > a.name) {
      return 1
  }
  return 0
}

export const TableComponent = (props) => {
  const { columns, items } = props
  return (
    <Table 
      columns={columns} 
      dataSource={items} 
      pagination={false} 
      rowKey={prop('id')} 
    />
  )
}
export default (props) => {
  const { items } = props
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: compare,
    },
    {
      title: 'Description',
      dataIndex: 'description'
    },
    {
      title: 'Stars',
      dataIndex: 'stargazers_count',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.stargazers_count - b.stargazers_count,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'forks',
      dataIndex: 'forks_count',
      sorter: (a, b) => a.forks_count - b.forks_count,
      sortDirections: ['descend', 'ascend'],
    },
  ]
  if(props.isLoading) {
    return (
      <Spin tip='Loading...'>
        <TableComponent items={items} columns={columns} />
      </Spin>
    )
  }
  
  return (
    <TableComponent items={items} columns={columns} />
  )
}