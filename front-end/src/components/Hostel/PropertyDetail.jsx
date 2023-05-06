import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
  Divider,
  ImageList,
  ImageListItem,
} from "@mui/material";

import { useState } from "react";

const dummyImageList = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Bedroom",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Bedroom",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Bedroom",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Bedroom",
  },
];

const PropertyDetail = () => {
  const [property, setProperty] = useState({
    propertyName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    address1: "",
    password: "",
    status: "Pending",
    image: [],
    bedrooms: "",
    occupancy: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // add code to submit property data to server
  };

  return (
    <Grid container spacing={3} paddingX={5} paddingY={2}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" component="h2">
              Property Details
            </Typography>
            <Divider
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "black",
                margin: "10px 0",
              }}
            />
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    id="propertyName"
                    name="propertyName"
                    label="Property Name"
                    value={property.propertyName}
                    onChange={handleInputChange}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    value={property.phone}
                    onChange={handleInputChange}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    value={property.email}
                    onChange={handleInputChange}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="city"
                    name="city"
                    label="City"
                    value={property.city}
                    onChange={handleInputChange}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="state"
                    name="state"
                    label="State"
                    value={property.state}
                    onChange={handleInputChange}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="address1"
                    name="address1"
                    label="Address"
                    value={property.address1}
                    onChange={handleInputChange}
                    required
                    fullWidth
                  />
                </Grid>


                <Grid item xs={12} sm={6}>
                  <TextField
                    id="bedrooms"
                    name="bedrooms"
                    label="Bedrooms"
                    type="number"
                    value={property.bedrooms}
                    onChange={handleInputChange}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="occupancy"
                    name="occupancy"
                    label="Occupancy"
                    type="number"
                    value={property.occupancy}
                    onChange={handleInputChange}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button variant="contained" color="primary" type="submit">
                    Update
                  </Button>
                </Grid>
              </Grid>

            </form>
            
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
        <ImageList rowHeight={250} cols={3} gap={8}
          padding={2}
          sx={{
            overflow: "hidden",
            borderRadius: '10px',
            border: '1px solid #eee',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
          }}>
          {dummyImageList.map((item) => (
            <ImageListItem
              key={item.img}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.3)",
                  zIndex: 1,
                },
              }}
            >
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt="property"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Button
          variant="contained"
          color="primary"
          sx={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
          }}
        >
          Add Image
        </Button>

      </Grid>
    </Grid>
  );
};

export default PropertyDetail;
