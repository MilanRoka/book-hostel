import React from 'react'
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";
import { Box, Button, FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import PeopleIcon from '@mui/icons-material/People';



const Searchbar = () => {
  return (
    <>
    <div >
          <img
            style={{
              height: 550,
              flex: 1,
              objectFit: 'cover',
              width: '100%',
              position: 'absolute'


            }}

            src='http://localhost:5173/back2.jpg'
          />
        </div>
        <div style={{ marginTop: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 500 }} >
          <Box
            sx={{
              marginTop: 40, padding: 1, borderRadius: 5, display: 'flex', gap: 2, flexDirection: 'row', justifyContent: 'center', alignItem: 'center', color: 'white', backgroundColor: 'white',
              boxShadow: 'none', zIndex: 1
            }}>

            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Where do you want to go?
              </InputLabel>
              <Input
                type='text'
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <PlaceIcon />
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
              style={{ borderRadius: 10, backgroundColor: '#2CCCC3', color: '#000000' }}
              variant="contained"
              type="submit"
            >Search
            </Button>
          </Box>
        </div>
    </>
  )
}

export default Searchbar
