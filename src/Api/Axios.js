import axios from 'axios'


const baseUrl = `${process.env.BASE_URL}/api`;
const getToken = () => localStorage.getItem('tokenMadinaShop')

export const Axios = axios.create({
  baseURL: baseUrl,
 
})
export const AxiosFormData = axios.create({
  baseURL: baseUrl,
 
})
AxiosFormData.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      
     "Content-Type": "multipart/form-data" ,
      'authorization': `Bearer ${getToken()}`,
      
    }
  }
})
Axios.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${getToken()}`,
      
    }
  }
})

Axios.interceptors.response.use(response => {
  if (response && response.data) return response.data
  return response
}, err => {
  if (!err.response) {
    return alert(err)
  }
  throw err.response
})

AxiosFormData.interceptors.response.use(response => {
  if (response && response.data) return response.data
  return response
}, err => {
  if (!err.response) {
    return alert(err)
  }
  throw err.response
})

