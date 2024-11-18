import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'

function Layout () {
  return (
    <div>
      <NavBar />
      <Breadcrumbs />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
