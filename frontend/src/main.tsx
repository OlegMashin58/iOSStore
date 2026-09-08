import { StrictMode } from 'react'
import { App } from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryProvider } from './app/providers/index.tsx'

import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryProvider>
  </StrictMode>,
)
