import { useId, useContext } from 'react'
import Container from '../components/Container/Container'
import { useGetProductDetail } from '../hooks/useGetProductDetail'
import { useParams } from 'react-router-dom'
import { useAddToCart } from '../hooks/useAddToCart'
import { CartContext } from '../context/cart'

function ProductDetailPage () {
  const { id } = useParams()

  const colorId = useId()
  const storageId = useId()

  const { product } = useGetProductDetail(id)
  const { addProductToCart, isLoading } = useAddToCart()

  const contextCart = useContext(CartContext)

  const handleAddToCart = async () => {
    const colorCode = document.getElementById(colorId).value
    const storageCode = document.getElementById(storageId).value
    addProductToCart(id, colorCode, storageCode)
      .then((result) => {
        if (result) {
          contextCart.addOrUpdateProduct(
            {
              id,
              image: product.imgUrl,
              brand: product.brand,
              model: product.model,
              price: product.price,
              color: colorCode,
              storage: storageCode,
              quantity: 1
            }
          )
        }
      })
  }

  return (
    <Container>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold'>Product Detail</h1>
      </div>
      <main className='flex flex-col md:flex-row gap-4 pb-10'>
        {/* Product Image */}
        <div className='w-full md:w-1/2'>
          <figure className='flex justify-center aspect-square mx-auto'>
            <img
              src={product?.imgUrl}
              alt='Shoes'
              className='py-5 object-contain w-full'
            />
          </figure>
        </div>
        {/* Product Info */}
        <aside className='w-full md:w-1/2'>
          <h2 className='text-2xl font-bold uppercase'>{product?.brand}</h2>
          <p className='text-xl'>{product?.model}</p>
          <p className='text-info'>
            {product?.price === '' ? 'Not Available' : `$${product?.price}`}
          </p>
          <div className='pl-1'>
            <div>
              <p className='font-bold'>CPU: </p>
              <ul className='list-disc pl-10'>
                {/* {product?.cpu?.map((cpu) => (
                  <li key={cpu}>{cpu}</li>
                ))} */}
                {product?.cpu}
              </ul>
            </div>
            <p>
              <span className='font-bold'>RAM:</span> {product?.ram}
            </p>
            <p>
              <span className='font-bold'>OS:</span> {product?.os}
            </p>
            <p>
              <span className='font-bold'>Screen Resolution:</span>{' '}
              {product?.displayResolution}
            </p>
            <p>
              <span className='font-bold'>Battery:</span> {product?.battery}
            </p>
            <div className='flex gap-2'>
              <span className='font-bold'>Cameras:</span>
              <p className='border border-gray-400 rounded-md p-1 max-w-[200px]'>
                {product?.primaryCamera}
              </p>
              <p className='border border-gray-400 p-1 max-w-[200px] rounded-md'>
                {product?.secondaryCmera}
              </p>
            </div>
            <p>
              <span className='font-bold'>Dimensions:</span>{' '}
              {product?.dimentions}
            </p>
            <p>
              <span className='font-bold'>Weight:</span> {product?.weight}
            </p>
          </div>
          {/* Selectors */}
          <div className=''>
            <h2 className='text-2xl font-bold'>Options</h2>
            <div className='flex gap-4'>
              <label className='form-control w-full max-w-xs'>
                <div className='label'>
                  <span className='label-text'>Colors</span>
                </div>
                <select id={colorId} className='select select-bordered'>
                  {product?.options?.colors?.map((color) => (
                    <option key={color.code} value={color.code}>
                      {color.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className='form-control w-full max-w-xs'>
                <div className='label'>
                  <span className='label-text'>Storage</span>
                </div>
                <select id={storageId} className='select select-bordered'>
                  {product?.options?.storages?.map((storage) => (
                    <option key={storage.code} value={storage.code}>
                      {storage.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          {/* Actions */}
          <div className='mt-10'>
            <div className='flex gap-4'>
              <button
                className='btn btn-primary' onClick={handleAddToCart}
                disabled={isLoading}
              >
                {
                  isLoading
                    ? 'Adding to cart...'
                    : 'Add to Cart'
                }
              </button>
            </div>
          </div>
        </aside>
      </main>
    </Container>
  )
}

export default ProductDetailPage
