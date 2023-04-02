import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



const HostelPage = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },

  ]
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ImageList >
          {itemData.map((item) => (
            <ImageListItem sx={{ height:300, width:700 }} key={item.img}>
              <img
                src={`${item.img}`}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

    </>
  )
}

export default HostelPage
