import React from 'react';
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
import EggAltIcon from '@mui/icons-material/EggAlt';
import { Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import HotTubIcon from '@mui/icons-material/HotTub';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';


const Services = () => {
    return (
        <>
            <Typography component="h1" variant="h4" align="center" sx={{ fontWeight: 'bold', color: 'green', paddingTop: 5 }}>
                CHOOSE YOUR SERVICES FOR PROPERTY
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: 60, margin: '0 auto', paddingLeft: 500 }}>
                <div style={{ flex: 1 }}>
                    <FormGroup>
                        <FormControlLabel required control={<Checkbox />} label={<><WifiIcon /> Free WiFi</>} />
                        <FormControlLabel required control={<Checkbox />} label={<><EggAltIcon />Free Breakfast</>} />
                        <FormControlLabel required control={<Checkbox />} label={<><LocalParkingIcon /> Personal Parking</>} />
                        <FormControlLabel required control={<Checkbox />} label={<><AcUnitIcon /> Air Conditioning</>} />
                        <FormControlLabel required control={<Checkbox />} label={<><CheckroomIcon /> Laundry</>} />
                        <FormControlLabel required control={<Checkbox />} label={<><VideoCameraFrontIcon /> CCTV Cameras</>} />
                        <FormControlLabel required control={<Checkbox />} label={<><SecurityIcon /> 24/7 Security</>} />
                    </FormGroup>
                </div>
                <div style={{ flex: 1 }}>
                    <FormGroup>
                        <FormControlLabel required control={<Checkbox />} label={<><LockIcon /> Personal Locker</>} />
                        <FormControlLabel required control={<Checkbox />} label={<><HotTubIcon />Hot Shower</>} />
                        <FormControlLabel required control={<Checkbox />} label={<><LocalLaundryServiceIcon /> Washing Machine</>} />
                        <FormControlLabel required control={<Checkbox />} label={<><AcUnitIcon /> Refrigerator</>} />
                        <FormControlLabel required control={<Checkbox />} label={<><MicrowaveIcon /> Microwave</>} />
                        <FormControlLabel required control={<Checkbox />} label={<><TungstenIcon /> Power Backup</>} />
                        <FormControlLabel required control={<Checkbox />} label={<><ShowerIcon /> Attached Bathroom</>} />
                    </FormGroup>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Button href='/hostelpage/:id' variant='contained' style={{
                backgroundColor: 'green',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 15,
                borderRadius: 20,
                width: 100,
                height: 50,
                marginTop: 50,
                display:'flex',
            }} >NEXT</Button>
            </div>
        </>
    );
};
export default Services;
