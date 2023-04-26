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
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import Searchbar from '../../Navbar/Searchbar';


export default function RegistrationForm() {

    const [image, setImage] = useState("")
    const [propertyName, setPropertyName] = useState("")

    const [bedrooms, setBedrooms] = useState("")
    const [occupancy, setOccupancy] = useState("")

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [street, setStreet] = useState("")
    const [address1, setAddress1] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitImage = async () => {
        const data = new FormData()
        data.append('file', image)
        data.append("upload_preset", "hzmji8mb")
        data.append("cloud_name", "de7rdmlca")
        const hello = await axios.post
            ("https://api.cloudinary.com/v1_1/de7rdmlca/image/upload", data)
        console.log(hello)
    }

    const navigate = useNavigate();
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
    console.log(propertyName)
    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(event.currentTarget)

        const formData = new FormData();
        formData.append('file', image);
        formData.append("upload_preset", "hzmji8mb");
        formData.append("cloud_name", "de7rdmlca");
        const hello = await axios.post("https://api.cloudinary.com/v1_1/de7rdmlca/image/upload", formData);

        if (password === confirmPassword) {
            const payload = {
                propertyName: propertyName,
                email: email,
                phone: phone,
                city: city,
                state: state,
                address1: address1,
                password: password,
                image: hello.data.url,
                street: street,

                bedrooms: bedrooms,
                occupancy: occupancy,


            }


            console.log(payload);
            for (let key in payload) {
                console.log(key, payload[key]);
            }
            axios.post("http://localhost:3000/property/create", payload).then((res) => {
                success();
                navigate('/');
            });
        }
        else {
            console.log("error")
        }

    };
    return (
        <>
            <Navbar />

            <Typography component="h1" variant="h4" align="center" sx={{ fontWeight: 'bold', color: 'green' }}>
                PROPERTY & CONTACT DETAILS
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                <div style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <React.Fragment>
                        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
                            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} >
                                            <TextField
                                                required
                                                id="propertyName"
                                                name="propertyName"
                                                label="Property Name"
                                                fullWidth
                                                // {...register("property1")}
                                                variant="outlined"
                                                onChange={(e) => setPropertyName(e.target.value)} />
                                        </Grid>



                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                type='number'
                                                id="bedrooms"
                                                name="bedrooms"
                                                label="Total number of bedrooms"
                                                fullWidth
                                                // {...register("property1")}
                                                variant="outlined"
                                                onChange={(e) => setBedrooms(e.target.value)} />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                type='number'
                                                id="occupancy"
                                                name="occupancy"
                                                label="Total Occupancy(Total no. of beds)"
                                                fullWidth
                                                // {...register("property1")}
                                                variant="outlined"
                                                onChange={(e) => setOccupancy(e.target.value)} />
                                        </Grid>



                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="email"
                                                name="email"
                                                label="Property Email"
                                                fullWidth
                                                // {...register("email")}
                                                variant="outlined"
                                                onChange={
                                                    (e) => setEmail(e.target.value)
                                                } />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="phone"
                                                name="phone"
                                                label="Phone Number"
                                                fullWidth
                                                // {...register("email")}
                                                variant="outlined"
                                                onChange={
                                                    (e) => setPhone(e.target.value)
                                                } />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="state"
                                                name="state"
                                                label="State/Province/Region"
                                                fullWidth
                                                // {...register("state")}
                                                variant="outlined"
                                                onChange={
                                                    (e) => setState(e.target.value)
                                                } />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="city"
                                                name="city"
                                                label="City"
                                                fullWidth
                                                // {...register("city")}
                                                variant="outlined"
                                                onChange={
                                                    (e) => setCity(e.target.value)
                                                } />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="address1"
                                                name="address1"
                                                label="Address Line"
                                                fullWidth
                                                variant="outlined"
                                                onChange={
                                                    (e) => setAddress1(e.target.value)
                                                } />

                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="street"
                                                name="street"
                                                label="Street"
                                                fullWidth
                                                // {...register("state")}
                                                variant="outlined"
                                                onChange={
                                                    (e) => setStreet(e.target.value)
                                                } />
                                        </Grid>
                                        <Grid >
                                        <FormControl sx={{ m: 3, width: '46ch' }} variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                <OutlinedInput
                                                    required
                                                    variant="outlined"
                                                    name="password"
                                                    id="adornment-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    onChange={
                                                        (e) => setPassword(e.target.value)
                                                    }
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
                                                    label="Password"
                                                     />
                                            </FormControl>
                                        </Grid>
                                        <Grid >
                                            <FormControl sx={{ mt:3, width: '46ch' }} variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                                <OutlinedInput
                                                    required
                                                    name="confirmPassword"
                                                    id="outlined-adornment-password"
                                                    type={showConfirmPassword ? 'text' : 'password'}
                                                    onChange={
                                                        (e) => setConfirmPassword(e.target.value)
                                                    }
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={() => handleClickShowPassword("confirmPassword")}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Confirm Password"
                                                    />
                                            </FormControl>
                                        </Grid>

                                    </Grid>
                                    <div>
                                        <Input sx={{ pt: 5 }} type="file" onChange={(e) => setImage(e.target.files[0])} />
                                    </div>
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