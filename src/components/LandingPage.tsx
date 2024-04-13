import React from 'react';
import AppBar from './AppBar';
import Drawer from './Drawer';
import EnvironmentalSectionCard from './EnvironmentalSectionCard';
import SoilHealthSectionCard from './SoilHealthSectionCard';
// import { Grid } from '@mui/material';
import WaterSupplySectionCard from './WaterSupplySectionCard';

const LandingPage = () => {
  return (
    <div>
      <AppBar />
      <Drawer />
      <main style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between' }}>
  <EnvironmentalSectionCard />
  <SoilHealthSectionCard />
  <WaterSupplySectionCard />
  {/* Add more content sections here */}
</main>
    </div>
  );
};

export default LandingPage;
