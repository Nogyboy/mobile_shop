import { useEffect, useState } from 'react'
import { fetchGetAllProducts } from '../services/products'
import { getAllProductsLocal, setAllProductsLocal, searchProductsLocal } from '../utils/indexDBProducts'
import { getProductDBTimestamp } from '../utils/localStorage'

export const useGetAllProducts = () => {
  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const getAllProductsRemote = async () => {
    setIsLoading(true)
    try {
      const products = await fetchGetAllProducts()
      if (products.length === 0) {
        setError('No products found')
        setIsLoading(false)
        return
      }
      setAllProductsLocal(products)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Check if productsDB timestamp is older than 1 hour
    const productsDBTimestamp = getProductDBTimestamp()
    if (productsDBTimestamp) {
      const now = new Date().getTime()
      const diff = now - productsDBTimestamp
      if (diff > 3600000) {
        getAllProductsRemote()
          .then(() => {
            searchProductsLocal()
              .then((products) => {
                setProducts(products)
              })
          })
      } else {
        searchProductsLocal(searchText)
          .then((products) => {
            setProducts(products)
          })
      }
    } else {
      getAllProductsRemote()
        .then(() => {
          getAllProductsLocal()
            .then((products) => {
              setProducts(products)
            })
        })
    }
  },
  [searchText])

  return { products, isLoading, error, searchText, setSearchText }
}
