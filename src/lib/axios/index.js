import axios from 'axios'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast'

const server = axios.create({
  baseURL: 'https://r2rh026tc1.execute-api.us-east-1.amazonaws.com/dev/api/v1/',
  headers: { 'Content-Type': 'application/json' },
})

server.interceptors.request.use((config) => {
  const token = Cookies.get('token')
  console.log(token, 'Sdjskdj')
  if (token) config.headers.Authorization = `Bearer ${token}`
  // NProgress.start()
  return config
})

server.interceptors.response.use(
  (response) => {
    // NProgress.done()
    if (response.data.responseCode) {
      response.data.responseCode = Number(response.data.responseCode)
    } else {
      response.data.responseCode = Number(response.data.responsecode)
    }

    if (response.data.responsemessage) {
      response.data.responseMessage = response.data.responsemessage
    }

    return response.data
  },
  (err) => {
    if (err.response.status === 401) {
      Cookies.remove('token')
      toast.error('Your Session has Expired kindly Login again')
      localStorage.clear()
      setTimeout(() => {
        window.location.reload()
      }, 500)
    }
    // NProgress.done()
    return Promise.reject(err)
  },
)

export default server
