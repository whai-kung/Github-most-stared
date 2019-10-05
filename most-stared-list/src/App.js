import React from 'react'
import { isEmpty } from 'ramda'
import { connect } from 'react-redux'
import { Layout, Spin } from 'antd'
import { branch } from 'recompose'

import { loadData } from './actions'
import config from './config'
import service from './services'


import Pagination from './components/Pagination'
import List from './components/List'
const { Header, Footer, Content } = Layout;


class App extends React.Component {
  componentDidMount()
  {
    this.props.initial()
    console.log(this.props)
  }

  render() {
    const { total_count, pageSize, page, changePage, items} = this.props
    console.log({ items })
    return (
      <Layout>
        <Header style={{ color: 'white' }}>Header</Header>
        <Content>
          {/* {
            branch(
              isEmpty(items),
              () => (<Spin tip="Loading...">
                
              </Spin>),
              () => <List items={items} onChange={changePage} />
            )(this.props)
          } */}
          <List items={items} onChange={changePage} />
        </Content>
        <Footer>
          <Pagination total={total_count} pageSize={pageSize} page={page} onChange={changePage}/>
        </Footer>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    pageSize: config.options.pageSize,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    initial: () => {
      service(config.options).then(({ data }) => {
        setTimeout(() => {
          dispatch({ page: 1, ...loadData(data) })
        }, 3000)
      })
    },
    changePage: (page) => {
      console.log(page)
      // service({ ...config.options, page }).then(({ data }) => {
      //   dispatch({ page, ...loadData(data) })
      // })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
