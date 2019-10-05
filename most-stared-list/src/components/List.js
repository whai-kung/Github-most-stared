import React from 'react'
import { Table } from 'antd'

const compare = (a, b) => {
  if (a.name > b.name) {
      return -1
  }
  if (b.name > a.name) {
      return 1
  }
  return 0
}

export default (props) => {
  console.log({props})
  const { items, onChange } = props
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
  return (
    <Table columns={columns} dataSource={items} onChange={onChange} />
  )
}