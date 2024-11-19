import { useState } from 'react'
import { fetchAddToCart } from '../services/productDetail'

export const useAddToCart = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const addProductToCart = async (id, colorCode, storageCode) => {
    setIsLoading(true)
    try {
      const product = await fetchAddToCart(id, colorCode, storageCode)
      if (product === undefined) {
        setError('Product not added to cart')
        setIsLoading(false)
        return false
      }

      setIsLoading(false)
      return true
    } catch (error) {
      setError(error)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  return { addProductToCart, isLoading, error }
}
