import axios from 'axios'

const standard = axios.create({
  baseURL: '/',
  validateStatus: (status) => status >= 200 && status < 300,
  timeout: 100000,
  transformResponse: [
    function (data) {
      return data
    }
  ]
})

standard.interceptors.response.use(
  (response) => {
    if (!response.data) {
      return response
    }
    if (typeof response.data === 'string') {
      return JSON.parse(response.data)
    }
    return response.data
  },
  (error) => {
    let result
    if (!error.response || !error.response.data) {
      result = error.message || error
    }
    if (error.response.data) {
      if (typeof error.response.data === 'string') {
        result = JSON.parse(error.response.data)
      } else {
        result = error.response.data
      }
    }
    result = result || error.response
    return Promise.reject(result)
  }
)

export default standard
