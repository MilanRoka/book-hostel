import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';

function Navbar() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
        <MapsHomeWorkOutlinedIcon sx={{fontSize:50}}/>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            bookHostel.
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/Home"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              List Your Property
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              About Us
            </Link>
          </nav>
          <Button href="/SignUp" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
      
      
    </React.Fragment>
  );
}

export default Navbar
