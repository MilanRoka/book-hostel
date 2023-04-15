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
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../App/slice/authSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme();
export default function SignIn() {
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch()


  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation();
  React.useEffect(
    () => {
      const token = localStorage.getItem('token');
      if (token) {

        navigate('/')
      }

    }
  )
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
    try {
      if (
        data.get('email') === 'admin@gmail.com' && data.get('password') === 'admin123'
      ) {
        navigate('/superAdmin')
      }
      console.log(email)
      const loginData = await login({
        email: data.get('email'),
        password: data.get('password'),
      }).unwrap()
      if (loginData) {
        navigate('/')
        localStorage.setItem('token', loginData.token)
        setIsSuccess(true)
      }
    } catch (err) {
      console.log(err)
      toast('Invalid Credentials', {
        position: toast.POSITION.BOTTOM_RIGHT,
        style: { backgroundColor: '#d31b2d', color:'white', borderRadius:25 }
    });
    }

  };
  return (
    <>
      <ToastContainer />
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
              <Typography component="h1" variant="h7" sx={{ fontSize:40, fontWeight: 'bold', display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
                Start Your Booking!!
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
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: 'green', '&:hover': { backgroundColor: 'darkGreen' } }}
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
    </>
  );
}