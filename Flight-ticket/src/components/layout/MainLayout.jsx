import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <Box className="flex flex-col min-h-screen">
      <Navbar />

      <Box component="main" className="grow">
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;