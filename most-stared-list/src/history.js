import { createBrowserHistory } from 'history'

/*
 * IE9 does not support history.pushState (that use in browserHistory)
 * https://caniuse.com/#search=history
 * use hashHistory if HTML5 history API is not supported
 * */
export default createBrowserHistory()
