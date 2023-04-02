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
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // function to log in the user
  const handleLogin = () => {
    // perform login logic here
    setIsLoggedIn(true);
  };

  // function to log out the user
  const handleLogout = () => {
    // perform logout logic here
    setIsLoggedIn(false);
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
          style={{ background: 'transparent' }}
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
              <Link variant="outlined" href="/" sx={{ my: 1, mx: 1.5 }}>
                Home
              </Link>
              <Link variant="outlined" href="/hostels" sx={{ my: 1, mx: 1.5 }}>
                Hostels
              </Link>
              <Link variant="outlined" href="/register property" sx={{ my: 1, mx: 1.5 }}>
                List Your Property
              </Link>
              <ButtonGroup
                aria-label="text button group"
                variant="outlined"
                sx={{ my: 1, mx: 1.5 }}
                style={{ padding: 10, borderRadius: 10 }}
              >
                <Button href="/SignUp">Register</Button>
                <Button href="/SignIn">Sign in</Button>
              </ButtonGroup>
              {/* {isLoggedIn ? (
                <Link variant="button" href="/profile" sx={{ my: 1, mx: 1.5 }}>
                  <PersonIcon sx={{ mr: 0.5 }} />
                  Profile
                </Link>
              ) : (
                <Button variant="outlined" onClick={handleLogin} sx={{ my: 1, mx: 1.5 }}>
                  Log out
                </Button>
              )}
              {isLoggedIn && (
                <Link variant="button" href="/register property" sx={{ my: 1, mx: 1.5 }}>
                  List Your Property
                </Link>
              )} */}
            </nav>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
}
export default Navbar;