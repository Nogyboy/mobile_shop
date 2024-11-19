import axiosInstance from '../utils/apiInstance'

export async function fetchGetProductDetail (id) {
  try {
    const { data } = await axiosInstance.get(`api/product/${id}`)
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}
