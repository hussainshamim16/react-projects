import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Men from './firstWeb'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Men />
  </StrictMode>,
)
