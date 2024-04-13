import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const plantImage = 'https://fastly.picsum.photos/id/107/5000/3333.jpg?hmac=RA_wrO9Hs-AelIqfc3yu08bk_5CZ6FhFyy1CQ_qhgjs'; // Replace with your image path

const EnvironmentalSectionCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={plantImage}
        alt="Plant"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Environmental Section
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Monitor temperature, humidity for optimal plant growth.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EnvironmentalSectionCard;
