const unfetch = require('isomorphic-unfetch')
const nowToken = require('now-token')

module.exports = (apiOptions = {}) => {
  const apiURL = apiOptions.url || 'https://api.zeit.co'

  const resolveToken = apiOptions.token
    ? Promise.resolve(apiOptions.token)
    : nowToken(apiOptions.tokenOptions)

  return function nowFetch(uri, options = {}) {
    return resolveToken.then(token => {
      options.headers = Object.assign({
        Authorization: `Bearer ${token}`
      }, options.headers)
      return unfetch(apiURL + uri, options)
    })
  }
}
