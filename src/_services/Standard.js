import axios from 'axios'

const standard = axios.create({
  baseURL: '/',
  timeout: 100000,
  transformResponse: [
    function (data) {
      return data
    }
  ]
})

standard.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return error
  }
)

export default standard
