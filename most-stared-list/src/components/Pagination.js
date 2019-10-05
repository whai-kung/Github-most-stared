import React from 'react'
import { identity } from 'ramda'
import { Pagination } from 'antd';

export default ({total, pageSize, page, onChange = identity}) => {
  return (
    <Pagination
      total={total}
      showTotal={total => `Total ${total} items`}
      pageSize={pageSize}
      onChange={onChange}
    />
  )
}