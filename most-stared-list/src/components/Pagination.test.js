import React from 'react';
import { mount } from 'enzyme'
import Pagination from './Pagination'

describe('Component', () => {
  it('should render', ()=>{
    const wrapper = mount(<Pagination />)
    expect(wrapper.find('.ant-pagination').exists()).toBe(true)
  })
})