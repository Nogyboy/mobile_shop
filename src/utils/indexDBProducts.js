import { openDB } from 'idb'

const DB_NAME = 'Products'
const STORE_PRODUCT_LIST = 'productsList'
const STORE_PRODUCT_DETAIL = 'productsDetail'
const DB_VERSION = 1

const initDB = async () => {
  return await openDB(DB_NAME, DB_VERSION, {
    upgrade (db) {
      if (!db.objectStoreNames.contains(STORE_PRODUCT_LIST)) {
        db.createObjectStore(STORE_PRODUCT_LIST)
      }

      if (!db.objectStoreNames.contains(STORE_PRODUCT_DETAIL)) {
        db.createObjectStore(STORE_PRODUCT_DETAIL)
      }
    }
  })
}

// ###### PRODUCTS LIST ######

// Get all products
export const getAllProductsLocal = async () => {
  const db = await initDB()
  return await db.getAll(STORE_PRODUCT_LIST)
}

// Set all products
export const setAllProductsLocal = async (products) => {
  const db = await initDB()
  // Set timestamp to local storage
  const now = new Date().getTime()

  window.localStorage.setItem('dbProductsTimestamp', now.toString())

  products.forEach((product) => {
    // Delete all products
    db.delete(STORE_PRODUCT_LIST, product.id)
    // Set all products
    db.put(STORE_PRODUCT_LIST, product, product.id)
  })
}

// Search products
export const searchProductsLocal = async (searchText) => {
  const db = await initDB()
  const products = await db.getAll(STORE_PRODUCT_LIST)
  return products.filter((product) => {
    return product.brand.toLowerCase().includes(searchText.toLowerCase()) ||
      product.model.toLowerCase().includes(searchText.toLowerCase())
  })
}

// ###### PRODUCT DETAIL ######
// Get product detail
export const getProductDetailLocal = async (id) => {
  const db = await initDB()
  try {
    const product = await db.get(STORE_PRODUCT_DETAIL, id)
    return product
  } catch (error) {
    return {}
  }
}

// Set product detail
export const setProductDetailLocal = async (product) => {
  const db = await initDB()
  // Get timestamp
  const now = new Date().getTime()

  // Add timestamp to product
  product.timestamp = now

  // Delete all products
  await db.delete(STORE_PRODUCT_DETAIL, product.id)
  db.put(STORE_PRODUCT_DETAIL, product, product.id)
}
