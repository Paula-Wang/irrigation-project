import React from 'react';
import AppBar from './AppBar';
import Drawer from './Drawer';
import EnvironmentalSectionCard from './EnvironmentalSectionCard';
import SoilHealthSectionCard from './SoilHealthSectionCard';
import WaterSupplySectionCard from './WaterSupplySectionCard';
import ThresholdsSectionCard from './ThresholdsSectionCard';
import { Grid } from '@mui/material'; 

const LandingPage = () => {
  return (
    <div>
      <AppBar />
      <Drawer />
      <main style={{ padding: '5rem' }}>
        <Grid container spacing={2} justifyContent="center"> 
          <Grid item xs={12} md={6}>
            <EnvironmentalSectionCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <SoilHealthSectionCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <WaterSupplySectionCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <ThresholdsSectionCard />
          </Grid>
        </Grid>
        
      </main>
    </div>
  );
};

export default LandingPage;
