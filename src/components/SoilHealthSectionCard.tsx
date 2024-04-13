import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const soilImage = 'https://fastly.picsum.photos/id/185/3995/2662.jpg?hmac=gXqQYKLwRcZNsxrWGW6YosAXEIU6-D7UbytF_ApGmDs'; // Replace with your image path

const SoilHealthSectionCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={soilImage}
        alt="Soil"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Soil Health Section
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Monitor soil moisture and other factors to maintain optimal plant health.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SoilHealthSectionCard;
