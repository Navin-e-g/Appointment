import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import viteLogo from '/vite.svg'
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Appointment from '../Components/Appointment';
import Details from '../Components/Details';
import PartnerSetup from '../Components/PartnerSetup';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/partner-setup" element={<PartnerSetup/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
