import React from 'react'
// import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import SignUp from './components/login/SignUp'
import SignIn from './components/login/SignIn'
import Forgotpw from './components/login/forgotpw'
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Homeitems from './components/Home/Homeitems';



  const App=()=> {
   return(
   <>
   {/* <Dashboard/> */}
   {/* <Home/> */}
   {/* <Dashboard/> */}

   <Router>
      <Routes>

         <Route path='/' element={<Home/>}/>
         <Route path='/navbar' element={< Navbar/>}/>
         <Route path='/footer' element={< Footer/>}/>
         <Route path='/signup' element={<SignUp />} />
         <Route path='/signin' element={<SignIn />} />
         <Route path='/forgotpw' element={<Forgotpw />} />
         <Route path='/dashboard' element={<Dashboard />} />
         <Route  element={<Homeitems />} />

      </Routes>
   </Router> 
   </>
   )
}

export default App;
