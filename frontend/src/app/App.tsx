import { Route, Routes } from 'react-router-dom'
import { MainPage, CatalogPage, GuidePage } from '../pages'

import './styles/reset.less'
import './styles/global.less'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/guide" element={<GuidePage />} />
    </Routes>
  )
}
