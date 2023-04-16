import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import Searchbar from '../Navbar/Searchbar';
import Navbar from '../Navbar/Navbar';

const HostelList = () => {
  const navigate = useNavigate();
  const [hostels, setHostels] = React.useState([]);
  const {city } = useParams()
    //capitalize city
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const cityCap = capitalize(city)
 

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/property/location/'+cityCap);
      const response = res.data;
      const filteredData = response.filter(item => item.status === 'Approved');
      setHostels(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
        <Navbar />
        <Searchbar />
      <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap', marginTop: 500, justifyContent: 'center' }}>
        {hostels.map(item => (
          <Card key={item._id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia component="img" height="300" image={item.image} alt={item.propertyName} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.propertyName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`${item.city}, ${item.address1}`}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                color="success"
                onClick={() => {
                  navigate(`/hostelPage/${item._id}`);
                }}
              >
                Book Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default HostelList;
