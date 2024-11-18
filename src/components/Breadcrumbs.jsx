import { Link, useParams } from 'react-router-dom'
import Container from './Container/Container'

function Breadcrumbs () {
  const { id } = useParams()

  console.log(id)
  return (
    <Container>
      <div className='breadcrumbs text-sm'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <a>{id}</a>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Breadcrumbs
