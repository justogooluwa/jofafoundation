import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const api = {
  applyVolunteer: async (data, token) => {
    const response = await apiClient.post('/volunteers', data, {
      headers: token
        ? { Authorization: `Bearer ${token}` }
        : {},
    })

    return response.data
  },
}

export default apiClient