import ProductCart from './Cards/ProductCart'
import { useContext } from 'react'
import { CartContext } from '../context/cart'

function SideBarCart ({ sidebarId }) {
  const contextCart = useContext(CartContext)

  const total = contextCart.cart.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)

  return (
    <div className='drawer drawer-end z-50'>
      <input id={sidebarId} type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label htmlFor={sidebarId} />
      </div>
      <div className='drawer-side max-h-screen'>
        <label
          htmlFor={sidebarId}
          aria-label='close sidebar'
          className='drawer-overlay'
        />
        <main className='bg-base-200 w-80 p-4 min-h-full max-h-screen flex flex-col'>
          <h2 className='text-xl font-bold'>Cart</h2>
          {/* Items */}
          <div className='overflow-y-scroll flex-1 gap-5 flex flex-col'>
            {contextCart.cart.map((item, index) => (
              <ProductCart key={index} product={item} />
            ))}
          </div>
          {/* Subtotal */}
          <div className='flex justify-between items-center px-2'>
            <span className='text-lg font-bold'>Total:</span>
            <span className='text-info'>${total}</span>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SideBarCart
