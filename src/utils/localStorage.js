export const getProductDBTimestamp = () => {
  return window.localStorage.getItem('dbProductsTimestamp')
}

// Cart Actions
export const getLocalCart = () => {
  return JSON.parse(window.localStorage.getItem('cart'))
}

export const setLocalCart = (cart) => {
  console.log(cart)
  window.localStorage.setItem('cart', JSON.stringify(cart))
}
