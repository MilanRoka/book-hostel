import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Image = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      const readers = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImages((prevImages) => [...prevImages, reader.result]);
        };
        reader.readAsDataURL(files[i]);
        readers.push(reader);
      }
    } else {
      setSelectedImages([]);
    }
  };

  return (
    <>
      <Typography component="h1" variant="h4" align="center" sx={{ fontWeight: 'bold', color: 'green' }}>
        SELECT YOUR PROPERTY IMAGES
      </Typography>

      <Button variant="contained" component="label">
        Upload image
        <input type="file" accept="image/*" hidden multiple onChange={handleFileChange} />
      </Button>

      {selectedImages.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <Typography variant="subtitle1" align="center">
            Preview:
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
            {selectedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`selected-${index}`}
                style={{ width: '200px', height: '200px', objectFit: 'cover', margin: '0.5rem' }}
              />
            ))}
          </div>
        </div>
      )}
      <div style={{ alignContent: 'center', display: 'flex', justifyContent: 'center', marginTop: 40 }}>
        <Button variant="contained" type='submit' sx={{ backgroundColor: 'green' }} href='/services'>NEXT</Button>
      </div>
    </>
  );
};

export default Image;
