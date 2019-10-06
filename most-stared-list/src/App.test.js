import React from 'react';
import { shallow, mount } from 'enzyme'
import * as R from 'ramda'

import config from './config'
import { App, mapStateToProps, mapDispatchToProps } from './App';

const initialState = {
  total_count: 0, 
  pageSize: 10, 
  changePage: R.identity, 
  items: [], 
  isLoading: false,
  initial: R.identity
}

describe('Component', () => {
  it('should render', ()=>{
    const wrapper = mount(<App {...initialState}/>)
    expect(wrapper.find('.ant-layout-header').exists()).toBe(true)
  })
})

describe('mapStateToProps', ()=>{
  it('should initial pageSize', ()=>{
    const state = mapStateToProps({ ...initialState, pageSize: 0 })
    expect(state).toEqual({
      ...initialState,
      pageSize: config.options.pageSize
    })
  })
})

describe('mapDispatchToProps', () => {
  const fn = () => new Promise((resolve) => resolve({ data: [] }))
  it('initial', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(fn)(dispatch).initial()
    expect(dispatch.mock.calls[0][0]).toMatchObject({ type: 'SHOW_LOADING' })
  })

  it('changePage', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(fn)(dispatch).changePage()
    expect(dispatch.mock.calls[0][0]).toMatchObject({ type: 'SHOW_LOADING' })
  })
})