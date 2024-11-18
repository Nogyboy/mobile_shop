import Container from './Container/Container'

function Breadcrumbs () {
  return (
    <Container>
      <div className='breadcrumbs text-sm'>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
    </Container>
  )
}

export default Breadcrumbs
