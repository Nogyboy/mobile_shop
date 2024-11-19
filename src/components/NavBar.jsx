import { Link } from 'react-router-dom'
import SideBarCart from './SideBarCart'
import { useId, useContext } from 'react'
import { CartContext } from '../context/cart'

function NavBar () {
  const sidebarId = useId()

  const contextCart = useContext(CartContext)

  const handleOpenSidebar = () => {
    const checkbox = document.getElementById(sidebarId)
    checkbox.checked = true
  }

  const total = contextCart.cart.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)

  return (
    <div className='navbar bg-base-100 sticky top-0 z-50'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost text-xl'>
          Mobile Shop
        </Link>
      </div>
      <div className='flex-none'>
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='badge badge-sm indicator-item'>{contextCart.cart.length}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className='card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow'
          >
            <div className='card-body'>
              <span className='text-lg font-bold'>{contextCart.cart.length} Items</span>
              <span className='text-info'>Subtotal: ${total}</span>
              <div className='card-actions'>
                <button
                  className='btn btn-primary btn-block'
                  onClick={handleOpenSidebar}
                >
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <SideBarCart sidebarId={sidebarId} />
      </div>
    </div>
  )
}

export default NavBar
