import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/App'
import 'src/i18n'
import 'src/assets/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <BrowserRouter basename={'/'}>
        <App/>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
)
