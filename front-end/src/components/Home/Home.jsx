import React from 'react'
import Navbar from '../Navbar/Navbar';
import Homeitems from './Homeitems'
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";
import Footer from '../Footer/Footer';
import Searchbar from '../Navbar/Searchbar';




const Home = () => {
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
