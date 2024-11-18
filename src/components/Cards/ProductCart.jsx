function ProductCart ({ product }) {
  return (
    <div key={product.id} className='flex gap-5 hover:bg-base-300 items-center'>
      <figure className='max-w-20 max-h-20 overflow-hidden rounded-md bg-white'>
        <img
          src={product.image}
          alt={product.name}
          className='w-full object-cover'
        />
      </figure>
      <div className=''>
        <h3 className='font-bold'>{product.name}</h3>
        <p className=''>{product.color}</p>
        <p className=''>${product.price}</p>
        <span className='badge badge-primary badge-lg'>Cantidad:
          {product.quantity}
        </span>
      </div>
    </div>
  )
}

export default ProductCart
