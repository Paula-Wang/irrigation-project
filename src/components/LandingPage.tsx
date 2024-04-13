import React from 'react';
import AppBar from './AppBar';
import Drawer from './Drawer';
import EnvironmentalSectionCard from './EnvironmentalSectionCard';
import SoilHealthSectionCard from './SoilHealthSectionCard';
import { Grid } from '@mui/material';
import WaterSupplySectionCard from './WaterSupplySectionCard';

const LandingPage = () => {
  return (
    <div>
      <AppBar />
      <Drawer />
      <main style={{ padding: '2rem' }}>
        <Grid container spacing={2}> {/* Add spacing between cards */}
          <Grid item xs={12} md={6}>
            <EnvironmentalSectionCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <SoilHealthSectionCard />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
            <WaterSupplySectionCard />
          </Grid>
        {/* Add more content sections here */}
      </main>
    </div>
  );
};

export default LandingPage;
