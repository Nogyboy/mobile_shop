import { createBrowserRouter } from 'react-router-dom'
import { ProductDetail, ProductList, ErrorPage } from '../pages'
import Layout from '../layouts/Layout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                path: '/',
                element: <ProductList />
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
    },
])

export { router }