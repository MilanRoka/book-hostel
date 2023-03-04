import React from 'react'
import Navbar from '../navbar/navbar'
import Homeitems from './Homeitems'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";
import Button from '@mui/material/Button';
import Footer from '../Footer/Footer';
import Input from '@mui/material/Input'
import PeopleIcon from '@mui/icons-material/People';
import PlaceIcon from '@mui/icons-material/Place';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';




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
      <div >
        <img
          style={{
            height: 500,
            flex: 1,
            objectFit: 'cover',
            width: '100%'

          }}

          src='http://localhost:5173/bg.jpg'
        />
      </div>
      <div
        style={{ marginTop: 25, display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
        <Box
          sx={{ display: 'flex', gap: 2, flexDirection: 'row', }}>

          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Where do you want to go?
            </InputLabel>
            <Input
              type='text'
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <PlaceIcon/>
                </InputAdornment>

              }
            />
          </FormControl>



          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Check-In
            </InputLabel>
            <Input
              type='date'
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Check-Out
            </InputLabel>
            <Input
              type='date'
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Guests
            </InputLabel>
            <Input
              type='number'
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <PeopleIcon />
                </InputAdornment>
              }
            />
          </FormControl>


          <Button
            endIcon={<SearchIcon />}
            style={{ borderRadius: 10 }}
            variant="contained"
            type="submit"
          >
            Search
          </Button>

        </Box>
      </div>
      <Homeitems />
      <Footer />
    </>
  )
}

export default Home
