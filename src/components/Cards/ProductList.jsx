import { Link } from 'react-router-dom'

function ProductListCard ({ product }) {
  return (
    <div className='card bg-base-100 w-72 shadow-xl'>
      <figure className='pt-2'>
        <img
          src={product.imgUrl}
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{product.brand}</h2>
        <p>{product.model}</p>
        <p className='text-info'>{product.price === '' ? 'Not Available' : `$${product.price}`}</p>
        <div className='card-actions justify-end'>
          <Link to={`/product/${product.id}`} className='btn btn-primary'>
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductListCard
