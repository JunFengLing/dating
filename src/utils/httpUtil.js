export default {
  get: function (url) {
    return fetch(url, {
      method: 'GET',
      // headers: {
      //
      // },
      mode: 'cors'
    })
  },
  post: function (url, body) {
    return fetch(url, {
      method: 'POST',
      // headers: {
      //
      // },
      // body: body,
      mode: 'cors'
    })
  }
}
