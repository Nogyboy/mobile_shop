import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

const axiosInstance = axios.create({
  baseURL: API_URL
})

export async function fetchGetAllProducts () {
  try {
    const { data } = await axiosInstance.get('api/product')
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}
