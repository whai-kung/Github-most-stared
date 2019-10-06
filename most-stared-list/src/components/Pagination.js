import React from 'react'
import * as R from 'ramda'
import { Pagination } from 'antd';

export default ({total, pageSize, onChange = R.identity}) => {
  return (
    <Pagination
      total={total}
      showTotal={total => `Total ${total} items`}
      pageSize={pageSize}
      onChange={onChange}
      showLessItems={true}
    />
  )
}