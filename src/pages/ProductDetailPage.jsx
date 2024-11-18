import Container from '../components/Container/Container'
import productData from '../../mock/productData.json'

function ProductDetailPage () {
  return (
    <Container>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold'>Product Detail</h1>
      </div>
      <main className='flex flex-col md:flex-row gap-4 pb-10'>
        {/* Product Image */}
        <figure className='w-full md:w-1/2 md:shrink-0 flex justify-center'>
          <img src={productData.imgUrl} alt='Shoes' className='py-5' />
        </figure>
        {/* Product Info */}
        <aside className='w-full md:w-1/2'>
          <h2 className='text-2xl font-bold uppercase'>{productData.brand}</h2>
          <p className='text-xl'>{productData.model}</p>
          <p className='text-info'>
            {productData.price === ''
              ? 'Not Available'
              : `$${productData.price}`}
          </p>
          <div className='pl-1'>
            <div>
              <p className='font-bold'>CPU: </p>
              <ul className='list-disc pl-10'>
                {productData.cpu.map((cpu) => (
                  <li key={cpu}>{cpu}</li>
                ))}
              </ul>
            </div>
            <p>
              <span className='font-bold'>RAM:</span> {productData.ram}
            </p>
            <p>
              <span className='font-bold'>OS:</span> {productData.os}
            </p>
            <p>
              <span className='font-bold'>Screen Resolution:</span>{' '}
              {productData.displayResolution}
            </p>
            <p>
              <span className='font-bold'>Battery:</span> {productData.battery}
            </p>
            <div className='flex gap-3'>
              <span className='font-bold'>Cameras:</span>
              <p className='border border-gray-400 p-1 max-w-[200px]'>
                {productData.primaryCamera}
              </p>
              <p className='border border-gray-400 p-1 max-w-[200px]'>
                {productData.secondaryCmera}
              </p>
            </div>
            <p>
              <span className='font-bold'>Dimensions:</span>{' '}
              {productData.dimentions}
            </p>
            <p>
              <span className='font-bold'>Weight:</span> {productData.weight}
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
                <select className='select select-bordered'>
                  {productData.options.colors.map((color) => (
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
                <select className='select select-bordered'>
                  {productData.options.storages.map((storage) => (
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
              <div className='btn btn-primary'>Add to Cart</div>
            </div>
          </div>
        </aside>
      </main>
    </Container>
  )
}

export default ProductDetailPage
