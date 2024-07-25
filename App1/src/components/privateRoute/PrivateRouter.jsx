import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { Box } from '@mui/system'
import Navbar from '../Navbar'
function PrivateRouter() {
  return (
    <Box>
    <Navbar/>
    {true?<Outlet/>:<Navigate to='/login'/>}
    </Box>
  )
}

export default PrivateRouter
