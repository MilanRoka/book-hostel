import React from 'react'
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import SecurityIcon from '@mui/icons-material/Security';
import TungstenIcon from '@mui/icons-material/Tungsten';
import ShowerIcon from '@mui/icons-material/Shower';



const Services = () => {
    return (
        <>
            <Typography component="h1" variant="h4" align="center" sx={{ fontWeight: 'bold', color: 'green' }}>
                CHOOSE YOUR PROPERTY SERVICES
            </Typography>

            <FormGroup>
                <FormControlLabel required control={<Checkbox />} label={ <><WifiIcon/> Free WiFi</>} />
                <FormControlLabel control={<Checkbox />} label={<><LocalParkingIcon/> Personal Parking</>} />
                <FormControlLabel control={<Checkbox />} label={<><AcUnitIcon/> Air Conditioning</>} />
                <FormControlLabel control={<Checkbox />} label={<><CheckroomIcon/> Laundry</>} />
                <FormControlLabel control={<Checkbox />} label={<><VideoCameraFrontIcon/> CCTV Cameras</>} />
                <FormControlLabel control={<Checkbox />} label={<><SecurityIcon/> 24/7 Security</>} />
                <FormControlLabel control={<Checkbox />} label={<><TungstenIcon/> Power Backup</>} />
                <FormControlLabel control={<Checkbox />} label={<><ShowerIcon/> Attached Bathroom</>} />
            </FormGroup>


        </>
    )
}

export default Services
