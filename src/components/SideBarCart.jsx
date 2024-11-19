import ProductCart from './Cards/ProductCart'

function SideBarCart ({ sidebarId }) {
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
            {[
              {
                id: 1,
                name: 'Product 1',
                price: 100,
                color: 'Red',
                image: 'https://picsum.photos/id/100/200/300',
                quantity: 1
              },
              {
                id: 2,
                name: 'Product 2',
                price: 200,
                color: 'Blue',
                image: 'https://picsum.photos/id/101/200/300',
                quantity: 2
              },
              {
                id: 3,
                name: 'Product 3',
                price: 300,
                color: 'Green',
                image: 'https://picsum.photos/id/102/200/300',
                quantity: 3
              },
              {
                id: 4,
                name: 'Product 4',
                price: 400,
                color: 'Yellow',
                image: 'https://picsum.photos/id/103/200/300',
                quantity: 4
              }
            ].map((item, index) => (
              <ProductCart key={index} product={item} />
            ))}
          </div>
          {/* Subtotal */}
          <div className='flex justify-between items-center px-2'>
            <span className='text-lg font-bold'>Total:</span>
            <span className='text-info'>$999</span>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SideBarCart
