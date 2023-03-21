import React from 'react'
import Navbar from '../navbar/navbar'
import Homeitems from './Homeitems'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";
import Footer from '../Footer/Footer';
import Searchbar from '../Navbar/Searchbar';




const Home = () => {
  const [inputs, setInputs] = useState({});
  return (
    <>    
      <Navbar />
      <Searchbar/>
      <Homeitems />
      <Footer />
    </>
  )
}

export default Home
