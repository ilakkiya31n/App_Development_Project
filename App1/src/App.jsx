import React from 'react'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PrivateRouter from './components/privateRoute/PrivateRouter'
import Home from './pages/Home/Home'
function App() {
  return (
    
    <Routes>
      {/* <Route path="/" element={<PrivateRouter/>}>
       <Route index element={<Home/>}/>
      </Route> */}
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
   
  )
}

export default App