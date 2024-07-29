// import React from 'react'
// import Login from './pages/login/Login'
// import Register from './pages/register/Register'
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import PrivateRouter from './components/privateRoute/PrivateRouter'
// import Home from './pages/Home/Home'

// import Tab from './components/Tab'
// import Buttoncla from './pages/Buttoncla'
// import ChartBar from './components/ChartBar'
// import DashBoard from './pages/dashboard/DashBoard'
// import Users from './pages/users/Users';
// import Product from './pages/product/Product'
// import Categories from './pages/categories/Categories'
// import UserDashBoard from './pages/userDashboard/UserDashBoard'
// import UserHome from './pages/Home/UserHome';

// function App() {
//   return (
//     <Router>
//      <Routes>
//       <Route path="/" element={<PrivateRouter/>}>
//        <Route index element={<Home/>}/>
//       </Route> 
//        <Route path="/user" element={<Users/>}/>
//        <Route path="/login" element={<Login/>}/>
//       <Route path="/register" element={<Register/>}/> 
//       <Route path="/dashboard" element={<DashBoard/>}/> 
//       <Route path="/products" element={<Product/>}/> 
//       <Route path="/categories" element={<Categories/>}/> 
//     {/* <Route path="/" element={<UserDashBoard/>}/>  */}
//       {/* <Route path="/" element={<UserHome/>}/>   */}
      
//       </Routes> 
      
//       {/* <DashBoard/> */}
//       {/* <Buttoncla backgroundColor={"red"} text={"submit"} onClick={handleClick}/> */}
//        {/* <Tab/>
//    <ChartBar/>  */}
//       </Router>
   
//   )
// }

// export default App











// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PrivateRouter from './components/privateRoute/PrivateRouter'
import Tab from './components/Tab'
import Buttoncla from './pages/Buttoncla'
import ChartBar from './components/ChartBar'
import DashBoard from './pages/dashboard/DashBoard'
import Users from './pages/users/Users';
import Product from './pages/product/Product'
import Categories from './pages/categories/Categories'
import UserDashBoard from './pages/userDashboard/UserDashBoard'
import UserHome from './pages/Home/UserHome';
import { AuthProvider } from './components/AuthProvider';
import UserLogin from './pages/login/UserLogin';

function App() {
  return (

      <Router>
      
        <Routes>
        <Route path="/" element={<PrivateRouter/>}>
        <Route index element={<Home/>}/>
      </Route> 
      <Route path="/user" element={<Users/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/userlogin" element={<UserLogin/>}/>
      <Route path="/register" element={<Register/>}/> 
      <Route path="/dashboard" element={<DashBoard/>}/> 
     <Route path="/products" element={<Product/>}/>     
       <Route path="/categories" element={<Categories/>}/>
      <Route path="/userdashboard" element={<UserDashBoard/>}/>  

      
          {/* Add more routes as needed */}
        </Routes>
     
      </Router>
    
  );
}

export default App;
