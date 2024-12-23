import axios from 'axios'

const API_URL = import.meta.env.VITE_MAIN_ENDPOINT

export const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
  }
})

const refreshTokens = async (refresh: string) => {
  const { data, status } = await apiInstance.post('/auth/refresh', { refresh })
  if (status === 500) {
    throw new Error('Internal server error')
  }
  return data
}

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('ACCESS_TOKEN')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true

      try {
        const { refresh, access } = await refreshTokens(localStorage.getItem('REFRESH_TOKEN') || '')

        localStorage.setItem('ACCESS_TOKEN', access)
        localStorage.setItem('REFRESH_TOKEN', refresh)
        originalRequest.headers.Authorization = `Bearer ${access}`

        return apiInstance(originalRequest)
      } catch (error) {
        window.location.href = '/login'

        return Promise.reject(error)
      }
    }

    if (error.response.status === 403) {
      window.location.href = '/'
    }

    if (error.response.status === 503) {
      return Promise.reject(error)
    }

    return Promise.reject(error)
  }
)