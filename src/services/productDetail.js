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

export async function fetchAddToCart (id, colorCode, storageCode) {
  try {
    const { data } = await axiosInstance.post('api/cart', {
      id,
      colorCode: Number(colorCode),
      storageCode: Number(storageCode)
    })
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}
