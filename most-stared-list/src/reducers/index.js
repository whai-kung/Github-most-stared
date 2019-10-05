import {
  LOAD_DATA,
} from '../actions'

export default (state = { page: 1, items: [] }, { type, payload }) => {
  switch (type) {
    case LOAD_DATA: 
      return payload
    default:
      return state
  }
}
