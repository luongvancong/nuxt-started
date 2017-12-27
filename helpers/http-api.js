import axios from 'axios'
import _ from 'underscore'

const env = require('~/env')

let baseURL = env.apiBaseURL

const http = axios.create({
  baseURL: baseURL
})

export default {
  setToken: function (token) {
    this.token = token
  },

  getToken: function () {
    return this.token
  },

  request: function (url, config = {}) {
    let defaultHeaders = {
      Authorization: 'Bearer ' + this.getToken()
    }

    let headers = _.extend(defaultHeaders, config.headers)

    let defaultConfig = {
      url: url,
      headers: headers
    }

    config = _.extend(defaultConfig, config)

    return http.request(config)
  },

  get: function (url, config = {}) {
    return this.request(url, config)
  },

  put: function (url, config = {}) {
    config.method = 'PUT'
    return this.request(url, config)
  },

  post: function (url, config = {}) {
    config.method = 'POST'
    return this.request(url, config)
  },

  delete: function (url, config = {}) {
    config.method = 'DELETE'
    return this.request(url, config)
  },

  patch: function (url, config = {}) {
    config.method = 'PATCH'
    return this.request(url, config)
  }
}
