import React from 'react'
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";
import { Box, Button, FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { getDistrict } from '../Api/location/location';
import { getPackage } from '../Api/package/package';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Searchbar = () => {

  const [district, setDistrict] = useState('');
  const [packages, setPackages] = useState('');
  const navigate = useNavigate()
  const getData = async () => {
    const data = await getDistrict();
    setDistrict(data);
  }
  const PackageData = async () => {
    const data = await getPackage();
    setPackages(data);
  }
  React.useEffect(() => {
    getData();
    PackageData();
  }, [])
  console.log(district);
  const [selectedLocation, setSelectedLocation] = useState('');
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const theme = useTheme();
  const [packageName, setPersonName, districtName] = React.useState([]);
  const handlePackageChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
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
      {/* <div style={{ marginTop: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 500 }} > */}
      <div className='mt-1  flex justify-center items-center h-16'>

        {/* <Box
          sx={{
            marginTop: 40, padding: 1.5,
            borderRadius: 2, display: 'flex',
            gap: 2, flexDirection: 'row', justifyContent: 'center',
            alignItem: 'center', color: 'white',
            backgroundColor: 'white',
            boxShadow: 'none', zIndex: 1,
          }}> */}

        <div className='mt-100 p-2 rounded-lg flex md:flex-row flex-col items-center bg-white z-10 '>
          <Box className='flex p-2'>
            <FormControl sx={{ width: 300 }} >
              <InputLabel id="demo-multiple-name-label">Area of your choice!</InputLabel>
              <Select
                value={selectedLocation}
                onChange={handleLocationChange}
                fullWidth
                input={<OutlinedInput label="Area of your choice!" />}

              >
                {
                  district?.data?.data?.map((item) => (
                    <MenuItem key={item.district_id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Box>
          <div className='flex p-2'>
            <FormControl sx={{ width: 300 }} >
              <InputLabel >Package</InputLabel>
              <Select
                value={packageName}
                onChange={handlePackageChange}
                input={<OutlinedInput label="Package" />}
              >
                {
                  packages?.data?.map((item) => (
                    <MenuItem key={item._id} value={item.packageName}>
                      {item.packageName}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </div>
          <Button
            endIcon={<SearchIcon />}
            style={{
              borderRadius: 10,
              padding:13,
              backgroundColor: 'green',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 14,
              textTransform: 'uppercase',
            }}
            variant="contained"
            type="submit"
            onClick={() => navigate(`/hostel/${selectedLocation}`)}
          >
            Search
          </Button>
          {/* </Box> */}
        </div>
      </div>
    </>
  )
}

export default Searchbar
