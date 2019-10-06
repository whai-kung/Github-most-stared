import React from 'react';
import { mount } from 'enzyme'
import { compare, TableComponent } from './List'

describe('TableComponent', () => {
  it('should render', ()=>{
    const wrapper = mount(<TableComponent />)
    expect(wrapper.find('.ant-table').exists()).toBe(true)
  })
  it('should render 2 rows', ()=>{
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      sorter: compare,
    }]
    const items = [{
      name: 'row1',
      id: '1'
    },{
      name: 'row2',
      id: '2'
    },{
      name: 'row3',
      id: '3'
    }]
    const wrapper = mount(<TableComponent columns={columns} items={items} />)
    expect(wrapper.find('.ant-table-tbody .ant-table-row').length).toEqual(6)
  })
})

describe('compare', ()=>{
  it('should return, -1', ()=>{
    const result = compare('aaab', 'aaaa')
  })
  it('should return, 0', ()=>{
    const result = compare('aaaa', 'aaaa')
  })
  it('should return, 1', ()=>{
    const result = compare('aaaa', 'aaab')
  })
})