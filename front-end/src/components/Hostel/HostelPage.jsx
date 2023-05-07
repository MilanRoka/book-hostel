import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Searchbar from '../Navbar/Searchbar';
import { Box, Button, FormControl, InputLabel, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { getDistrict } from '../Api/location/location';
import { getPackage } from '../Api/package/package';
import { Tabs, Tab } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },

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

      <div className="flex flex-col justify-center  ">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          className='ml-24'
        >
          <Tab label="Facilities" value={0} />
          <Tab label="Gallery" value={1} />
          <Tab label="Availability" value={2} />
        </Tabs>

        <div>
          <Typography variant="h6" sx={{ paddingTop: 2, paddingX: 11 }}>Our Facilities</Typography>
          
        </div>

        <div>
          <Typography variant="h6" sx={{ paddingTop: 2, paddingX: 11 }}>Gallery</Typography>
          <Box sx={{ paddingX: 11, paddingTop: 2 }} >
            <ImageList variant="masonry" cols={5} gap={15}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </div>

        <div>
          <Typography variant="h6" sx={{ paddingTop: 2, paddingX: 11 }}>
            Availability
          </Typography>
        </div>

      </div>
    </>
  );
};

export default HostelPage;