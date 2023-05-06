import React from 'react'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Image = () => {
    return (
        <>
            <Typography component="h1" variant="h4" align="center" sx={{ fontWeight: 'bold', color: 'green' }}>
                SELECT YOUR PROPERTY IMAGES
            </Typography>

            <Button variant="contained" component="label">Upload image
                <input
                    type="file"
                    hidden
                />
            </Button>
        </>
    )
}
export default Image
