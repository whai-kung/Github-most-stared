export const LOAD_DATA = 'LOAD_DATA'
export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'

export const loadData = (payload) => ({
  type: LOAD_DATA,
  payload
})

export const showLoading = {
  type: SHOW_LOADING,
}

export const hideLoading = {
  type: HIDE_LOADING,
}