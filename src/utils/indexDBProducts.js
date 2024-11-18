import { openDB } from 'idb'

const DB_NAME = 'Products'
const STORE_NAME = 'productsList'
const STORE_NAME_PRODUCT = 'productsDetail'
const DB_VERSION = 1

const initDB = async () => {
  return await openDB(DB_NAME, DB_VERSION, {
    upgrade (db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME)
      }

      if (!db.objectStoreNames.contains(STORE_NAME_PRODUCT)) {
        db.createObjectStore(STORE_NAME_PRODUCT)
      }
    }
  })
}

// Get all products
export const getAllProductsLocal = async () => {
  const db = await initDB()
  return await db.getAll(STORE_NAME)
}

// Set all products
export const setAllProductsLocal = async (products) => {
  const db = await initDB()
  // Set timestamp to local storage
  const now = new Date().getTime()

  window.localStorage.setItem('dbProductsTimestamp', now.toString())

  // Delete all products
  await db.delete(STORE_NAME)
  // Set all products
  products.forEach((product) => {
    db.put(STORE_NAME, product, product.id)
  })
}

// Search products
export const searchProductsLocal = async (searchText) => {
  const db = await initDB()
  const products = await db.getAll(STORE_NAME)
  return products.filter((product) => {
    return product.brand.toLowerCase().includes(searchText.toLowerCase()) ||
      product.model.toLowerCase().includes(searchText.toLowerCase())
  })
}
