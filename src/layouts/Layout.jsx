import { Outlet } from 'react-router'

function Layout () {
  return (
    <div>
      Layout
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
