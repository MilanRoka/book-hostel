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
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

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
          className="border-b dark:border-gray-600"
        >
          <Toolbar className="flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <HolidayVillageTwoToneIcon className="text-4xl md:text- mr-2 " />
              <Typography
                variant="h6"
                noWrap
                className="flex-shrink-0 text-lg md:text-2xl font-bold tracking-wide"
              >
                bookHostel.
              </Typography>
            </div>
            <nav className="flex-shrink-0 flex">
              <ButtonGroup
                variant="text"
                aria-label="text button group"
                className="flex flex-wrap items-center gap-2 md:gap-6"
              >
                <Button href="/" key="home">Home</Button>
                <Button href="/hostels" key="hostels">Hostels</Button>
                <Button href="/register property" key="list-property">List Your Property</Button>

                {isLoggedIn ?
                <>
                <Button href="/property-details" key="property-details">Property Details</Button>

                  <ButtonGroup key="loggedin-group">
                    <Button onClick={handleLogout} key="logout">Log Out</Button>
                    <Button href="#" key="profile"> <PersonIcon /> </Button>
                  </ButtonGroup>
                  </>
                  :
                  <ButtonGroup key="loggedout-group">
                    <Button href="/SignIn" onClick={handleLogin} key="signin">Sign In</Button>
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
