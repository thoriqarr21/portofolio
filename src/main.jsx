import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Online from './components/Online.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Online/>
  </StrictMode>,
)
