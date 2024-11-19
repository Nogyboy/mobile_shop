import { useEffect, useState } from 'react'
import { getProductDetailLocal, setProductDetailLocal } from '../utils/indexDBProducts'
import { fetchGetProductDetail } from '../services/productDetail'

export const useGetProductDetail = (id) => {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const getProductDetailRemote = async () => {
    setIsLoading(true)
    try {
      const product = await fetchGetProductDetail(id)
      if (product === undefined) {
        setError('Product not found')
        setIsLoading(false)
        return
      }
      await setProductDetailLocal(product)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Check if productsDB timestamp is older than 1 hour
    getProductDetailLocal(id)
      .then((product) => {
        if (product) {
          const now = new Date().getTime()
          const diff = now - product.timestamp
          if (diff > 3600000) {
            getProductDetailRemote()
              .then(() => {
                getProductDetailLocal(id)
                  .then((product) => {
                    setProduct(product)
                  })
              })
          } else {
            getProductDetailLocal(id)
              .then((product) => {
                setProduct(product)
              })
          }
        } else {
          getProductDetailRemote()
            .then(() => {
              getProductDetailLocal(id)
                .then((product) => {
                  setProduct(product)
                })
            })
        }
      })
  },
  [id])

  return { product, isLoading, error }
}
