import { createBrowserRouter } from 'react-router-dom'
import { ProductDetail, ProductListPage, ErrorPage } from '../pages'
import Layout from '../layouts/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/',
        element: <ProductListPage />
      },
      {
        path: 'product/:id',
        element: <ProductDetail />
      },
      // Error page
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
])

export { router }
