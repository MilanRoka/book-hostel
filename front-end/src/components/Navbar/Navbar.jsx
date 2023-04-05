import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import HolidayVillageTwoToneIcon from '@mui/icons-material/HolidayVillageTwoTone';
import PersonIcon from '@mui/icons-material/Person';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);



  React.useEffect(
    () => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
  )
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    
  };

  return (
    <div>
      <React.Fragment>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
          style={{ color: 'dark' }}
        >
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <HolidayVillageTwoToneIcon sx={{ fontSize: 50 }} />
            <Typography variant="h6" noWrap sx={{
              mr: 2, pt: 1.5,
              display: 'flex',
              flexGrow: 1,
              fontFamily: 'Arial, sans-serif',
              fontSize: '25px',
              fontWeight: 'bold',
              letterSpacing: '1px'
            }}>
              bookHostel.
            </Typography>
            <nav>
              <ButtonGroup variant="text" aria-label="text button group">
                <Button href="/" key="home">Home</Button>
                <Button href="/hostels" key="hostels">Hostels</Button>
                <Button href="/register property" key="list-property">List Your Property</Button>
                {isLoggedIn ?
                  <ButtonGroup key="loggedin-group">
                    <Button  onClick={handleLogout} key="logout">Log Out</Button>
                    <Button href="#" key="profile"> <PersonIcon /> </Button>
                  </ButtonGroup>
                  :
                  <ButtonGroup key="loggedout-group">
                    <Button href="/SignIn"  onClick={handleLogin} key="signin">Sign In</Button>
                    <Button href="/SignUp" key="signup">Register</Button>
                  </ButtonGroup>
                }
              </ButtonGroup>
            </nav>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
}

export default Navbar;
