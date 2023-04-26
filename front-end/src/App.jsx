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
import Records from './components/Dashboard/Records';
import Hostels from './components/Hostel/Hostels';
import RegistrationForm from './components/Hostel/HostelRegistration/RegistrationForm';
import Searchbar from './components/Navbar/Searchbar';
import HostelPage from './components/Hostel/HostelPage'
import '@fontsource/public-sans';
import SuperAdmin from './components/Dashboard/SuperAdmin';
import Checkout from './components/Booking/checkout';
import HostelList from './components/Hostel/HostelList';



const App = () => {
   return (
      <>
         <Router>
            <Routes>
               <Route exact path='/' element={<Home />} />
               <Route path='/signup' element={<SignUp />} />
               <Route path='/signin' element={<SignIn />} />
               <Route path='/navbar' element={< Navbar />} />
               <Route path='/footer' element={< Footer />} />
               <Route path='/hostels' element={<Hostels />} />
               <Route path='/register property' element={<RegistrationForm />} />
               <Route path='/forgotpw' element={<Forgotpw />} />
               <Route path='/dashboard' element={<Dashboard />} />
               <Route element={<Records />} />
               <Route path='/homeitems' element={<Homeitems />} />
               <Route path='/searchbar' element={<Searchbar />} />
               <Route path='/hostelpage/:id' element={<HostelPage />} />
               <Route path='/superadmin' element={<SuperAdmin />} />
               <Route path='/checkout' element={<Checkout/>}/>
               <Route path='/hostel/:city' element={<HostelList/>} />
               <Route path='*' element={<div className='flex justify-center items-center h-screen text-4xl text-red-600'>Page not found !</div>} />
            </Routes>
         </Router>
      </>
   )
}
export default App;

