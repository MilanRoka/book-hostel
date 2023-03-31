import * as React from 'react';
import Navbar from '../navbar/navbar'
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";
import Footer from '../Footer/Footer';
import Searchbar from '../Navbar/Searchbar';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';


const data = [
  {
    title: 'Hostel Yog',
    description: 'Thamel, Kathmandu',
    image: 'http://localhost:5173/card1.jpg',
  },
  {
    title: 'Fireflies BagPackers',
    description: 'Paknajol, Kathmandu',
    image: 'http://localhost:5173/card2.jpg',
  },
  {
    title: 'Vision Hostel',
    description: 'Ghattekulo, Kathmandu',
    image: 'http://localhost:5173/card2.jpg',
  },
  {
    title: 'Hostel Yog',
    description: 'Thamel, Kathmandu',
    image: 'http://localhost:5173/card1.jpg',
  },
  {
    title: 'Fireflies BagPackers',
    description: 'Paknajol, Kathmandu',
    image: 'http://localhost:5173/card2.jpg',
  },
  {
    title: 'Vision Hostel',
    description: 'Ghattekulo, Kathmandu',
    image: 'http://localhost:5173/card2.jpg',
  },
  {
    title: 'Hostel Yog',
    description: 'Thamel, Kathmandu',
    image: 'http://localhost:5173/card1.jpg',
  },
  {
    title: 'Fireflies BagPackers',
    description: 'Paknajol, Kathmandu',
    image: 'http://localhost:5173/card2.jpg',
  },
  {
    title: 'Fireflies BagPackers',
    description: 'Paknajol, Kathmandu',
    image: 'http://localhost:5173/card2.jpg',
  },
  {
    title: 'Vision Hostel',
    description: 'Ghattekulo, Kathmandu',
    image: 'http://localhost:5173/card2.jpg',
  },
  {
    title: 'Hostel Yog',
    description: 'Thamel, Kathmandu',
    image: 'http://localhost:5173/card1.jpg',
  },
  {
    title: 'Fireflies BagPackers',
    description: 'Paknajol, Kathmandu',
    image: 'http://localhost:5173/card2.jpg',
  }
]


const Hostels = () => {
  return (
    <>

      <Navbar />
      <Searchbar />
      <Typography style={{ display: 'flex',alignItems:'center', marginTop: 60, justifyContent: 'center',fontWeight:'bold', fontSize:'30px' }}>Hostel Suggestions</Typography>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 50, flexWrap: 'wrap', marginTop: 30, justifyContent: 'center' }}>      
        {
          data.map((item) => {
            return (
              <Card sx={{ minHeight: '280px', width: 320 }}>
                <CardCover>
                  <img
                    src={item.image}

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
                    {item.title}
                  </Typography>
                  <div className='flex flex-wrap'>
                    <Typography
                      startDecorator={<LocationOnRoundedIcon />}
                      textColor="neutral.300"
                      className="w-3/4"
                    >
                      {item.description}
                    </Typography>
                    <Button
                    >
                      <Typography
                        textColor="lightGreen"
                        level='h6'
                        className="font-bold"
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