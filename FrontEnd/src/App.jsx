import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import viteLogo from '/vite.svg'
import Home from '../Pages/Home';
import Login from '../Pages/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
