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
        <Box
            component="footer"
            sx={{
                bgcolor: 'grey.900',
                color: 'grey.400',
                pt: 8,
                pb: 4,
                mt: 'auto'
            }}
        >
            <Container>
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3, color: 'white' }}>
                            <Box sx={{
                                width: 32,
                                height: 32,
                                bgcolor: 'primary.main',
                                borderRadius: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <FlightTakeoffIcon sx={{ fontSize: 20 }} />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 800 }}>SkyBook</Typography>
                        </Box>
                        <Typography variant="body2" sx={{ lineHeight: 1.8, maxWidth: 300 }}>
                            Your trusted partner for seamless flight bookings across India and beyond. Experience the joy of travel with SkyBook.
                        </Typography>
                    </Grid>

                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 600, mb: 3 }}>
                            Quick Links
                        </Typography>
                        <Stack spacing={1.5}>
                            <Link component={RouterLink} to="/" color="inherit" underline="hover">Home</Link>
                            <Link component={RouterLink} to="/flights" color="inherit" underline="hover">Search Flights</Link>
                            <Link component={RouterLink} to="/login" color="inherit" underline="hover">Login</Link>
                            <Link component={RouterLink} to="/register" color="inherit" underline="hover">Register</Link>
                        </Stack>
                    </Grid>

                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 600, mb: 3 }}>
                            Support
                        </Typography>
                        <Stack spacing={1.5}>
                            <Link href="#" color="inherit" underline="hover">FAQs</Link>
                            <Link href="#" color="inherit" underline="hover">Cancellation Policy</Link>
                            <Link href="#" color="inherit" underline="hover">Baggage Policy</Link>
                            <Link href="#" color="inherit" underline="hover">Contact Us</Link>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 600, mb: 3 }}>
                            Contact Us
                        </Typography>
                        <Stack spacing={2.5}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <EmailIcon sx={{ color: 'primary.main' }} fontSize="small" />
                                <Typography variant="body2">support@skybook.in</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <PhoneIcon sx={{ color: 'primary.main' }} fontSize="small" />
                                <Typography variant="body2">1800-123-4567</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <AccessTimeIcon sx={{ color: 'primary.main' }} fontSize="small" />
                                <Typography variant="body2">24/7 Customer Support</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ borderColor: 'grey.800', mb: 4 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
                    <Typography variant="caption">
                        © 2026 SkyBook. All rights reserved.
                    </Typography>
                    <Stack direction="row" spacing={4}>
                        <Typography variant="caption" sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>Privacy Policy</Typography>
                        <Typography variant="caption" sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>Terms of Service</Typography>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
