import axios from 'axios'
import moment from 'moment'
import config from '../config'

/**
 * options contain page, sortBy, and pageSize with allow app to custom the data before calling an Api.
 * ex: {
 *  page: 1,
 *  pageSize: 10,
 *  sortBy: star,
 *  perious: -30
 * }
 */
export default (options) => {
  const url = `${config.baseURL}?q=created:>${moment().add(-30, 'days').format('YYYY-MM-DD')}&sort=${options.sortBy}&page=${options.page}&per_page=${options.pageSize}`
  return axios.get(url)
}