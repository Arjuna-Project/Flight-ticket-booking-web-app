import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Container from '../ui/Container';

const Footer = () => {
  return (
    <Box component="footer" className="bg-gray-900 text-gray-400 pt-16 pb-8 mt-auto">

      <Container>

        <Grid container spacing={4} className="mb-12">

          {/* Logo Section */}
          <Grid item xs={12} md={4}>

            <div className="flex items-center gap-2 mb-3 text-white">

              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <FlightTakeoffIcon style={{ fontSize: 20 }} />
              </div>

              <Typography variant="h6" className="font-extrabold">
                SkyBook
              </Typography>

            </div>

            <Typography variant="body2" className="leading-7 max-w-xs">
              Your trusted partner for seamless flight bookings across India and beyond. Experience the joy of travel with SkyBook.
            </Typography>

          </Grid>


          {/* Quick Links */}
          <Grid item xs={6} md={2}>

            <Typography variant="subtitle1" className="text-white font-semibold mb-3">
              Quick Links
            </Typography>

            <Stack spacing={1.5}>
              <Link component={RouterLink} to="/" color="inherit" underline="hover">Home</Link>
              <Link component={RouterLink} to="/flights" color="inherit" underline="hover">Search Flights</Link>
              <Link component={RouterLink} to="/login" color="inherit" underline="hover">Login</Link>
              <Link component={RouterLink} to="/register" color="inherit" underline="hover">Register</Link>
            </Stack>

          </Grid>


          {/* Support */}
          <Grid item xs={6} md={2}>

            <Typography variant="subtitle1" className="text-white font-semibold mb-3">
              Support
            </Typography>

            <Stack spacing={1.5}>
              <Link href="#" color="inherit" underline="hover">FAQs</Link>
              <Link href="#" color="inherit" underline="hover">Cancellation Policy</Link>
              <Link href="#" color="inherit" underline="hover">Baggage Policy</Link>
              <Link href="#" color="inherit" underline="hover">Contact Us</Link>
            </Stack>

          </Grid>


          {/* Contact */}
          <Grid item xs={12} md={4}>

            <Typography variant="subtitle1" className="text-white font-semibold mb-3">
              Contact Us
            </Typography>

            <Stack spacing={2.5}>

              <div className="flex items-center gap-2">
                <EmailIcon className="text-blue-500" fontSize="small" />
                <Typography variant="body2">support@skybook.in</Typography>
              </div>

              <div className="flex items-center gap-2">
                <PhoneIcon className="text-blue-500" fontSize="small" />
                <Typography variant="body2">1800-123-4567</Typography>
              </div>

              <div className="flex items-center gap-2">
                <AccessTimeIcon className="text-blue-500" fontSize="small" />
                <Typography variant="body2">24/7 Customer Support</Typography>
              </div>

            </Stack>

          </Grid>

        </Grid>


        <Divider className="border-gray-800 mb-6" />


        {/* Bottom Section */}
        <div className="flex justify-between flex-wrap gap-2">

          <Typography variant="caption">
            © 2026 SkyBook. All rights reserved.
          </Typography>

          <div className="flex gap-6">

            <Typography
              variant="caption"
              className="cursor-pointer hover:text-white"
            >
              Privacy Policy
            </Typography>

            <Typography
              variant="caption"
              className="cursor-pointer hover:text-white"
            >
              Terms of Service
            </Typography>

          </div>

        </div>

      </Container>

    </Box>
  );
};

export default Footer;