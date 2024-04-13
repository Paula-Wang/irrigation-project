import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const waterImage = 'https://fastly.picsum.photos/id/384/5000/3333.jpg?hmac=2GOxaQgXQ8kSAxRCFBixRObEW77GSX6a874FK-ZsvOM'; // Replace with your image path

const WaterSupplySectionCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={waterImage}
        alt="Water"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Water Supply Section
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Monitor tank water level to ensure you are not caught unaware by an empty tank.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WaterSupplySectionCard;
