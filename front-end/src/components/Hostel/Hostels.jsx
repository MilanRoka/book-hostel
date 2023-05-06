import * as React from 'react';
import Navbar from '../Navbar/Navbar';
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";
import Footer from '../Footer/Footer';
import Searchbar from '../Navbar/Searchbar';
import Button from '@mui/material/Button';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Hostels = () => {
  const navigate = useNavigate()
  const [hostels, setHostels] = React.useState([])
  const fetchData = () => {
    axios.get('http://localhost:3000/property')
      .then((res) => {
        //check if approved
        const response = res.data
        const filteredData = response.filter(
          (item) => item.status === 'Approved'
        )
        setHostels(filteredData)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    fetchData()
  }, [])
  console.log(hostels)
  return (
    <>
      <div>
      <Navbar />
      <Searchbar />
      </div>
      <Typography style={{ display: 'flex',alignItems:'center', marginTop: 60, justifyContent: 'center',fontWeight:'bold', fontSize:'30px' }}>Hostel Suggestions</Typography>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 50, flexWrap: 'wrap', marginTop: 420, marginBottom:50, justifyContent: 'center' }}>      
        {
          hostels && hostels?.map((item) => {
            return (
              <Card sx={{ minHeight: '280px', width: 320 }}>
                <CardCover>
                  <img
                    src={item.image[0]}

                    // src='http://localhost:5173/card2.jpg'
                    loading="lazy"
                    alt=""
                  />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                  }}
                />
                <CardContent sx={{ justifyContent: 'flex-end' }}>
                  <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                    {item.propertyName}
                  </Typography>
                  <div className='flex flex-wrap'>
                    <Typography
                      startDecorator={<LocationOnRoundedIcon />}
                      textColor="neutral.300"
                      className="w-3/4"
                    >
                      {item.city}
                    </Typography>
                    <Button
                    >
                      <Typography
                        textColor="lightGreen"
                        level='h6'
                        className="font-bold"
                        onClick={() => {
                          navigate('/hostelPage/' + item._id)
                        }}
                      >
                        Book
                      </Typography>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          }
          )
        }

      </div>
      <Footer />
    </>
  );
}
export default Hostels