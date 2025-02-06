import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './components/NavBar'
import Main from './components/MainComp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <Main/>
  </StrictMode>,
)
