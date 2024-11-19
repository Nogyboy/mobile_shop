import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/cart'

function ProductCart ({ product }) {
  const navigate = useNavigate()
  const contextCart = useContext(CartContext)

  return (
    <div
      key={product.id} className='flex gap-5 hover:bg-base-300 items-center cursor-pointer'
      onClick={() => {
        navigate(`/product/${product.id}`)
      }}
    >
      <figure className='max-w-20 max-h-20 overflow-hidden rounded-md bg-white'>
        <img
          src={product.image}
          alt={product.model}
          className='w-full object-cover'
        />
      </figure>
      <div className=''>
        <h3 className='font-bold'>{product.model}</h3>
        <p className=''>{product.color}</p>
        <p className=''>${product.price}</p>
        <span className='badge badge-primary'>Cantidad: {product.quantity}</span>
      </div>
      {/* Delete Button */}
      <button
        className='btn btn-ghost btn-circle text-red-400'
        onClick={(e) => {
          e.stopPropagation()
          contextCart.removeFromCart(product.id)
        }}
      >
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
            d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </button>
    </div>
  )
}

export default ProductCart
