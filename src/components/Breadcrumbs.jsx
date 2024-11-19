import { Link, useParams } from 'react-router-dom'
import Container from './Container/Container'
import { useGetProductDetail } from '../hooks/useGetProductDetail'

function Breadcrumbs () {
  const { id } = useParams()

  const { product } = useGetProductDetail(id)

  return (
    <Container>
      <div className='breadcrumbs text-sm'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {
            id &&
              <li>
                <a>{product?.brand} - {product?.model}</a>
              </li>
          }
        </ul>
      </div>
    </Container>
  )
}

export default Breadcrumbs
