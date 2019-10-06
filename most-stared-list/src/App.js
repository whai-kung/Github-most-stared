import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import * as R from 'ramda'

import { loadData, showLoading, hideLoading } from './actions'
import config from './config'
import service from './services'

import Pagination from './components/Pagination'
import List from './components/List'

import './css/app.css'
import { TIMEOUT } from 'dns'

const { Header, Footer, Content } = Layout;

export class App extends React.Component {
  componentDidMount()
  {
    const { initial = R.identity } = this.props
    initial()
  }

  shouldComponentUpdate(state)
  {
    return R.equals(state.items, this.props.items)
  }

  render() {
    const { total_count, pageSize, changePage = R.identity, items, isLoading } = this.props
    return (
      <Layout>
        <Header style={{ color: 'white' }}>Github most stared repos</Header>
        <Content>
          <List items={items} isLoading={isLoading}/>
        </Content>
        <Footer>
          <Pagination total={total_count} pageSize={pageSize} onChange={changePage}/>
        </Footer>
      </Layout>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    ...state,
    pageSize: config.options.pageSize,
  }
}
export const mapDispatchToProps = (restApi = new Promise()) => (dispatch) => {
  return {
    initial: () => {
      dispatch(showLoading)
      restApi(config.options).then(({ data }) => {
        dispatch({ page: 1, ...loadData(data) })
        dispatch(hideLoading)
      })
    },
    changePage: (page) => {
      dispatch(showLoading)
      restApi({ ...config.options, page }).then(({ data }) => {
        dispatch({ page, ...loadData(data) })
        dispatch(hideLoading)
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps(service))(App);
