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
import axios from 'axios'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { FormControl } from '@mui/material';



// mobile number, forget password field.

const theme = createTheme();

export default function SignUp() {

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phone: data.get('mobile'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
      role: "user"

    }
    axios
      .post("http://localhost:3000/users/register",
        payload
      )
      .then((res) => {
        navigate('/signin')
      }
      )
      .catch((err) => {
        console.log(err);
        toast.error('Invalid Credentials')
      });
  };
  const { register } = useForm()
  return (
    <>
      <ToastContainer />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
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
            src='http://localhost:5173/signup1.png'
          />
        </div>
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'absolute',
          top: 80,
          right: 200,

        }}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h7" sx={{ fontWeight: 'bold' }}>
                SignUp
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      required
                    >
                    <TextField
                      type='text'
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type='text'
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type='email'
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="number"
                      label="Mobile Number"
                      name="mobile"
                      autoComplete="number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: 'green', '&:hover': { backgroundColor: 'red' } }}
                >
                  Sign Up
                </Button>
                <Grid container >
                  <Grid item>
                    <Link href="/SignIn" variant="contained">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>

          </Container>
        </div>
      </div>
    </>
  );
}