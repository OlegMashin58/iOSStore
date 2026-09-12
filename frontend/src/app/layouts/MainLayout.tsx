import { Outlet } from 'react-router-dom'
import { Header, Footer } from '@widgets/index'

export const MainLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}