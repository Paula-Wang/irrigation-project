import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';

const ThresholdsSectionCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="div"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140px', backgroundColor: 'grey.200' }}
      >
        <IconButton color="primary" aria-label="settings">
          <SettingsIcon />
        </IconButton>
      </CardMedia>
      <CardContent>
        <Typography variant="h5" component="div">
          Thresholds Section
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Set optimal moisture, temperature, and other thresholds for automated irrigation.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ThresholdsSectionCard;
