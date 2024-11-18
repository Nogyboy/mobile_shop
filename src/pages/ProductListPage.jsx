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
          <input type='text' className='grow' placeholder='Search' onChange={(e) => debouncedSearch(e.target.value)} />
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
          <div className='flex justify-center items-center'>
            <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-200' />
          </div>
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
