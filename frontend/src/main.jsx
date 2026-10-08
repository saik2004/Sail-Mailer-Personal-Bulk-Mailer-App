import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GmailAppPassword from './Pages/GmailAppPassword.jsx'
import Fileformat from './Pages/Fileformat.jsx'
import Terms from './Pages/Terms.jsx'

import { BrowserRouter ,Routes, Route } from "react-router-dom";
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/GmailAppPassword' element={<GmailAppPassword/>}></Route>
      <Route path='/fileformatdetails' element={<Fileformat/>}></Route>
      <Route path="/terms" element={<Terms />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
