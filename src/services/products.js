import axiosInstance from '../utils/apiInstance'

export async function fetchGetAllProducts () {
  try {
    const { data } = await axiosInstance.get('api/product')
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}
