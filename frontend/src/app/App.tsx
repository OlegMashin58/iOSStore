import { Route, Routes } from 'react-router-dom'
import {
  MainPage,
  CatalogPage,
  GuidePage,
  ProfilePage,
  AdminAppsPage,
  DownloadPage,
} from '../pages'

import './styles/reset.less'
import './styles/global.less'
import { AccountLayout } from '@widgets/index'
import { RequireAuth } from './providers/auth/RequireAuth'
import { MainLayout } from './layouts'

export const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/guide" element={<GuidePage />} />
      </Route>

      <Route element={<RequireAuth />}>
        <Route element={<AccountLayout />}>
          <Route path="/account/profile" element={<ProfilePage />} />
          <Route path="/account/apps" element={<AdminAppsPage />} />
        </Route>
      </Route>

      <Route path="/test-ipa" element={<DownloadPage />} />
    </Routes>
  )
}
