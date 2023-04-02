import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const theme = createTheme();
export default function SignIn() {
  const [isSuccess, setIsSuccess] = React.useState(false);

  const navigate = useNavigate()
  const success = () => {
    return (
      <Alert severity="success">This is a success alert — check it out!</Alert>
    )
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
    axios
      .post("http://localhost:3000/users/login",
        {
          email: data.get('email'),
          password: data.get('password'),

        })
      .then((res) => {
        console.log(res.data.token)
        localStorage.setItem('token', res.data.token)
        setIsSuccess(true)
        navigate('/')
      })
  };
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }}>
      <div style={{ flex: 1 }}>
        <img
          style={{
            height: 500,
            objectFit: 'cover',
            width: '40%',
            position: 'absolute',
            top: 150,
            left: 150,
          }}
          src='http://localhost:5173/signin1.png'
        />
      </div>
      <div style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 200,
                    right: 200,
                }}>
      <ThemeProvider theme={theme} >
        <Container
          component="main"
          maxWidth="xs"
        >
          <CssBaseline />
          <Typography component="h1" variant="h7" sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
            SignIn
          </Typography>
          <Box
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}

          >


            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}
              <Button
                
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor:'green','&:hover': { backgroundColor: 'red' } }}
              >

                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/Forgotpw" variant="contained">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/SignUp" variant="contained">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>

        </Container>
      </ThemeProvider>
      </div>
    </div>
  );
}