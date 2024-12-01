import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import {AppPlug} from "./AppPlug.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
      <AppPlug/>
  </StrictMode>,
)
