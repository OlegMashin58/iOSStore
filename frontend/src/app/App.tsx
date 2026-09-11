import { Route, Routes } from 'react-router-dom'
import {
  MainPage,
  CatalogPage,
  GuidePage,
  ProfilePage,
  AdminAppsPage,
  TestPage,
} from '../pages'

import './styles/reset.less'
import './styles/global.less'
import { AccountLayout, Footer, Header } from '@widgets/index'
import { RequireAuth } from './providers/auth/RequireAuth'

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/guide" element={<GuidePage />} />

        {/* <Route path="/profile" element={<AccountLayout />} /> */}
        <Route path="/test-ipa" element={<TestPage />} />

        <Route element={<RequireAuth />}>
          <Route element={<AccountLayout />}>
            <Route path="/account/profile" element={<ProfilePage />} />
            <Route path="/account/apps" element={<AdminAppsPage />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}
