import { createContext, useContext, useState } from 'react'
import { getLocalCart, setLocalCart } from '../utils/localStorage'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getLocalCart() || [])

  const removeFromCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id)
    setCart(newCart)
    setLocalCart(newCart)
  }

  const clearCart = () => {
    setCart([])
    setLocalCart([])
  }

  const addOrUpdateProduct = (product) => {
    let newProductCart = []

    // Check if product exists in cart
    const productIndex = cart.findIndex((oldProduct) => oldProduct.id === product.id)

    if (productIndex === -1) {
      // Product not found in cart, add it
      newProductCart = [...cart, { ...product, quantity: 1 }]
    } else {
      // Product found in cart, update quantity
      newProductCart = cart.map((oldProduct) => {
        if (oldProduct.id === product.id) {
          return { ...oldProduct, quantity: oldProduct.quantity + 1 }
        }
        return oldProduct
      })
    }
    setCart(newProductCart)
    setLocalCart(newProductCart)
  }

  return (
    <CartContext.Provider value={{ cart, removeFromCart, clearCart, addOrUpdateProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
