import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Searchbar from '../Navbar/Searchbar';

import { Box, Button, FormControl, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { getDistrict } from '../Api/location/location';
import { getPackage } from '../Api/package/package';
import { Tabs, Tab } from '@mui/material';


const images = [
  { url: "public/card1.jpg" },
  { url: "public/card2.jpg" },
  { url: "public/card3.jpg" },
  { url: "public/card4.jpg" },
];

const HostelPage = () => {

  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

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

  const [detail, setDetail] = React.useState("")
  const { id } = useParams()
  const fetchData = () => {
    axios.get(`http://localhost:3000/property/${id}`)
      .then(res => {
        setDetail(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <div>
        <div className='p-2 rounded-lg flex flex-col md:flex-row items-center justify-center bg-slate-200 z-10'>
          <Box className='flex p-2 '>
            <FormControl sx={{ width: 300 }} >
              <InputLabel id="demo-multiple-name-label">Area of your choice!</InputLabel>
              <Select
                value={selectedLocation}
                onChange={handleLocationChange}
                fullWidth
                input={<OutlinedInput label="Area of your choice!" />}>
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
          <Box className='flex p-2'>
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
          </Box>
          <Button
            endIcon={<SearchIcon />}
            style={{
              borderRadius: 10,
              padding: 13,
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
      <div className="flex flex-col md:flex-row md:pl-24 py-10 ">
        <div className="flex w-1/2 md:w-1/2 ">
          <img src={detail && detail?.image} alt="" />
        </div>
        <div className="flex md:w-1/2 w-full py-10 ">
          <div className="w-full flex flex-col md:px-20 ">
            <div className=" w-full md:px-20 pt-0">
              <h1 style={{ fontSize: 30, fontWeight: "bolder", }}>
                {detail && detail?.propertyName}
              </h1>
              <li style={{ fontWeight: 'bold' }}>
                {
                  detail && detail?.address1 + ', ' + detail?.city + ', ' + detail?.state
                }
              </li>
              <h3 >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam ni
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eaque ut architecto. A cumque nulla expedita vero praesentium, atque necessitatibus esse aperiam doloribus ipsum aliquam reprehenderit at quibusdam consequatur fugiat.
              </h3>
            </div>
            <div className=" w-full  px-4 pt-10 md:px-20">
              <h1 style={{ fontSize: 20, fontWeight: "bolder", }}>
                Package Offer
              </h1>
              <li>
                Get 10% discount on booking for 1 month or more.
              </li>
              <li >
                Free breakfast included with every booking.
              </li>
              <li >
                Complimentary pick-up and drop-off.
              </li>
            </div>      
          
            <div className="flex flex-col justify-center items-center">
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab label="Section 1" value={0} />
                <Tab label="Section 2" value={1} />
                <Tab label="Section 3" value={2} />
              </Tabs>

              <button
                onClick={
                  () => {
                    navigate('/checkout')
                  }
                } className="block w-customBtn bg-green-900 text-white font-bold py-2 px-4 mx-20 mt-10 rounded-lg hover:bg-green-700">
                Book Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HostelPage;
