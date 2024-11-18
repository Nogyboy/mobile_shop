import Container from '../components/Container/Container'
import ProductListCard from '../components/Cards/ProductList'
import { useGetAllProducts } from '../hooks/useGetAllProducts'
import debounce from 'just-debounce-it'

function ProductListPage () {
  const { products, isLoading, error, setSearchText } = useGetAllProducts('')

  const debouncedSearch = debounce(setSearchText, 300)

  return (
    <Container>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold'>Product List</h1>
        {/* Search Bar */}
        <label className='input input-bordered flex items-center gap-2'>
          <input
            type='text'
            className='grow'
            placeholder='Search'
            onChange={(e) => debouncedSearch(e.target.value)}
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='h-4 w-4 opacity-70'
          >
            <path
              fillRule='evenodd'
              d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
              clipRule='evenodd'
            />
          </svg>
        </label>
      </div>
      {/* Products Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 py-10'>
        {products?.map((product, index) => (
          <ProductListCard key={index} product={product} />
        ))}
        {isLoading && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
          >
            <g
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
            >
              <path
                stroke-dasharray='16'
                stroke-dashoffset='16'
                d='M12 3c4.97 0 9 4.03 9 9'
              >
                <animate
                  fill='freeze'
                  attributeName='stroke-dashoffset'
                  dur='0.3s'
                  values='16;0'
                />
                <animateTransform
                  attributeName='transform'
                  dur='1.5s'
                  repeatCount='indefinite'
                  type='rotate'
                  values='0 12 12;360 12 12'
                />
              </path>
              <path
                stroke-dasharray='64'
                stroke-dashoffset='64'
                stroke-opacity='0.3'
                d='M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z'
              >
                <animate
                  fill='freeze'
                  attributeName='stroke-dashoffset'
                  dur='1.2s'
                  values='64;0'
                />
              </path>
            </g>
          </svg>
        )}
        {error && (
          <div className='flex justify-center items-center'>
            <div className='text-red-500'>No products found</div>
          </div>
        )}
      </div>
      <div />
    </Container>
  )
}

export default ProductListPage
