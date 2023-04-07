import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { FormControl, Snackbar } from '@mui/material';
import Box from '@mui/material/Box';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import { useState } from 'react';

export default function RegistrationForm() {


    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleClickShowPassword = (type) => {
        if (type === "password") {
            setShowPassword(!showPassword);
        } else {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const success = () => {
        return (
            <Alert severity="success">This is a success alert — check it out!</Alert>
        )
    }
    React.useEffect(() => {
        if (open) {
            setTimeout(() => {
                setOpen(false)
            }, 6000)
        }
    }, [open])
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const payload = {
            propertyName: data.get('propertyName'),
            email: data.get('email'),
            phone: data.get('phone'),
            city: data.get('city'),
            state: data.get('state'),
            address1: data.get('address1'),
            street: data.get('street'),
            password: data.get('password'),
            confirmPassword: data.get('confirmPassword'),
            image: data.get('image')
        }

        console.log(payload)
        for (let key in payload) {
            console.log(key, payload[key])
            // if (!!payload[key]) {

            //     // setOpen(true);
            //     console.log("hi mom ")
            //     return;
            // }
        }

        axios
            .post("http://localhost:3000/property/create", payload
            )
            .then((res) => {
                // console.log(res.data.token)
                // sessionStorage.setItem('token', res.data.token)
                success()
                navigate('/superadmin')
            })
    };
    return (
        <>
            <Navbar />
            
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                    <img
                        style={{
                            height: 'auto',
                            maxWidth: '100%',
                            position: 'absolute',
                            top: '50%',
                            left: '30%',
                            transform: 'translate(-50%, -50%)',
                            width: '40%',
                        }}
                        src='http://localhost:5173/undraw1.png'
                    />
                </div>
                <div style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <React.Fragment>
                        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}
                        >
                            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                            >
                                <Typography component="h1" variant="h4" align="center" sx={{ marginBottom: 5, fontWeight: 'bold', color: 'green' }}>
                                    Register Property
                                </Typography>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'green' }}>
                                    Details
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <Grid container spacing={3}
                                    >

                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                id="propertyName"
                                                name="propertyName"
                                                label="Property Name"
                                                fullWidth
                                                autoComplete="shipping address-line1"
                                                // {...register("property1")}
                                                variant="standard" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                id="email"
                                                name="email"
                                                label="Email"
                                                fullWidth
                                                autoComplete="shipping address-line1"
                                                // {...register("email")}
                                                variant="standard" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                id="phone"
                                                name="phone"
                                                label="Phone Number"
                                                fullWidth
                                                autoComplete="shipping address-line1"
                                                // {...register("email")}
                                                variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="city"
                                                name="city"
                                                label="City"
                                                fullWidth
                                                autoComplete="shipping address-level2"
                                                // {...register("city")}
                                                variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                id="state"
                                                name="state"
                                                label="State/Province/Region"
                                                fullWidth
                                                // {...register("state")}
                                                variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="address1"
                                                name="address1"
                                                label="Address Line1"
                                                fullWidth
                                                autoComplete="shipping address-level2"
                                                // {...register("city")}
                                                variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                id="street"
                                                name="street"
                                                label="Street"
                                                fullWidth
                                                // {...register("state")}
                                                variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl variant="standard">
                                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                                <Input
                                                    name="password"
                                                    id="adornment-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={() => handleClickShowPassword("password")}
                                                                onMouseDown={handleMouseDownPassword}
                                                            >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl variant="standard">
                                                <InputLabel htmlFor="standard-password">Confirm Password</InputLabel>
                                                <Input
                                                    name="confirmPassword"
                                                    id="standard-confirmPassword"
                                                    type={showConfirmPassword ? 'text' : 'password'}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label=" password visibility"
                                                                onClick={() => handleClickShowPassword("confirmPassword")}
                                                                onMouseDown={handleMouseDownPassword}
                                                            >
                                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <div>
                                        <Input sx={{ pt: 13 }} type="file" accept="image/*" />

                                    </div>


                                    {/* <Grid item xs={12}>
                                        <label htmlFor="image">
                                            <Button
                                                variant='outlined'
                                                component="span"
                                                style={{
                                                    backgroundColor: 'lightBlue',
                                                    color: 'white',
                                                    marginTop: 20,
                                                    marginBottom: 20
                                                }}>
                                                Registration Image
                                            </Button>
                                            <input
                                                id="image"
                                                name="image"
                                                type="file"
                                                accept=".jpg, .jpeg, .png"
                                                style={{ display: 'none' }}
                                                onChange={(e) => handleImageUpload(e.target.files[0])} />
                                        </label>
                                        {selectedFile && (
                                            <p style={{fontStyle:'italic',color:'blue'}}>{selectedFile.name}</p>
                                        )}
                                    </Grid> */}

                                    <div style={{ alignContent: 'center', display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                                        <Button variant="contained" type='submit' sx={{ backgroundColor: 'green' }}>SUBMIT</Button>
                                    </div>
                                </Box>
                            </Paper>
                        </Container>
                    </React.Fragment>
                </div>
            </div>
            <Footer />
        </>
    );
}