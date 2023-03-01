import React from 'react'
import Navbar from '../navbar/navbar'
import Homeitems from './Homeitems'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import ReactDOM from "react-dom/client";
// import LocationPicker from 'react-location-picker';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { fontFamily } from '@mui/system';
import Footer from '../Footer/Footer';





const Home = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Navbar />
      <div>
        <img
          style={{
            height: 500,
            flex: 1,
            width: null,

          }}

          src='http://localhost:5173/bg.jpg'
        />
        <div style={{  }}>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row', }}>
            <label>
              <input
                style={{ padding: 11 }}
                placeholder='Where do you want to go?'
                type="location"
              />
            </label>
            <label>
              Check In:
              <input
                style={{ padding: 10 }}

                type="date"
              />
              Check Out:
              <input
                style={{ padding: 10 }}

                type="date"
              />
            </label>
            <label>
              <input
                style={{ padding: 11 }}

                placeholder='Guests'
                type="number"
              />
            </label>

            <Button variant="outlined" type="submit">Search</Button>

          </Box>

        </div>
        <Homeitems />



      </div>





      <Footer />
    </>
  )
}

export default Home
