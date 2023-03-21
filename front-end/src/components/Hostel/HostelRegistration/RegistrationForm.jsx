import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { FormControl } from '@mui/material';
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
import { borderRight } from '@mui/system';







export default function RegistrationForm() {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const navigate = useNavigate()

    const success = () => {
        return (
            <Alert severity="success">This is a success alert — check it out!</Alert>
        )
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const payload = {
            ownerFirstName: data.get('ownerFirstName'),
            ownerLastName: data.get('ownerLastName'),
            propertyName: data.get('propertyName'),
            email: data.get('email'),
            city: data.get('city'),
            state: data.get('state'),
            zip: data.get('zip'),
            password: data.get('password')
        }
        console.log(
            payload

        )
        axios
            .post("http://localhost:3000/property/create", payload
            )
            .then((res) => {
                // console.log(res.data.token)
                // sessionStorage.setItem('token', res.data.token)
                success()
                navigate('/dashboard')
            })
    };
    return (
        <>
            <Navbar />
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
                                                id="property1"
                                                name="property1"
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
                                                id="zip"
                                                name="zip"
                                                label="Zip / Postal code"
                                                fullWidth
                                                autoComplete="shipping postal-code"
                                                // {...register("zip")}
                                                variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl variant="standard">
                                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                                <Input
                                                    name="password"
                                                    id="standard-adornment-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                            >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
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