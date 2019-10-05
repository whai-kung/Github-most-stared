export default {
  baseURL: 'https://api.github.com/search/repositories',
  options: {
    page: 1,
    pageSize: 10,
    sortBy: 'star',
    perious: -30
  }
}