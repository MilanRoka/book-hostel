import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

const images = [
  {
    image: '/card2.jpg',
    title: 'Kathmandu',
    width: '20%',
  },
  {
    image: '/card1.jpg',
    title: 'Pokhara',
    width: '20%',
  },
  {
    image: '/card3.jpg',
    title: 'Bhaktapur',
    width: '20%',
  },
  {
    image: '/card4.jpg',
    title: 'Lalitpur',
    width: '20%',
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));


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
    title: 'AllStar Home',
    description: 'New Road, Pokhara',
    image: 'http://localhost:5173/card2.jpg',
  },
  {
    title: 'Classic Stay',
    description: 'Kapan, Butwal',
    image: 'http://localhost:5173/card2.jpg',
  },
  {
    title: 'Ruby Hostel',
    description: 'Gwarko, Lalitpur',
    image: 'http://localhost:5173/card2.jpg',
  },
  {
    title: 'Fire Bird Hostel',
    description: 'Thimi, Bhaktapur',
    image: 'http://localhost:5173/card2.jpg',
  },
  {
    title: 'Hostel Cube',
    description: 'Devis Fall, Pokhara ',
    image: 'http://localhost:5173/card2.jpg',
  }
]

const homeitems = () => {
  const theme = useTheme();
  return (
    <>
      <div>
        {/* image with button */}
        <Box style={{ display: 'flex', gap: 30, flexWrap: 'wrap', marginTop: 50, justifyContent: 'center', padding: 15 }}>
          {images.map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.image})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10, flexDirection: 'column' }} >
        <div>
          <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 1, fontWeight:'bold',fontSize:25 }} >Recent Picks</h1>
        </div>
        <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap', marginTop: 50, justifyContent: 'center' }}>
          {
            data.map((item) => {
              return (
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={item.image}
                      alt="green iguana" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button href='/hostelpage' variant='contained' size="small" color="success">
                      Book Now
                    </Button>
                  </CardActions>
                </Card>
              )
            }
            )
          }
        </div>
      </div>
    </>
  )

};
export default homeitems
