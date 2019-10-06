import {
  LOAD_DATA,
  SHOW_LOADING,
  HIDE_LOADING
} from '../actions'

export default (state = { page: 1, items: [], isLoading: false }, { type, payload }) => {
  switch (type) {
    case LOAD_DATA: 
      return { ...state, ...payload }
    case SHOW_LOADING: 
      return { ...state, isLoading: true }
    case HIDE_LOADING: 
      return { ...state, isLoading: false }
    default:
      return state
  }
}
