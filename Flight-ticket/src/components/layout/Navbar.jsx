import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '../ui/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Container from '../ui/Container';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/flights', label: 'Flights' },
        { to: '/login', label: 'Login' },
        { to: '/register', label: 'Register' },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, color: 'primary.main', textDecoration: 'none' }} component={Link} to="/">
                <FlightTakeoffIcon sx={{ mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 800 }}>SkyBook</Typography>
            </Box>
            <List>
                {navLinks.map((link) => (
                    <ListItem key={link.to} disablePadding>
                        <ListItemButton
                            component={NavLink}
                            to={link.to}
                            sx={{
                                textAlign: 'center',
                                '&.active': { color: 'primary.main', fontWeight: 'bold' }
                            }}
                        >
                            <ListItemText primary={link.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Button fullWidth component={Link} to="/flights" sx={{ mt: 2 }}>
                Book Now
            </Button>
        </Box>
    );

    return (
        <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)' }}>
            <Container>
                <Toolbar disableGutters sx={{ height: 70 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, textDecoration: 'none', color: 'inherit' }} component={Link} to="/">
                        <Box sx={{
                            width: 36,
                            height: 36,
                            bgcolor: 'primary.main',
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            mr: 1.5
                        }}>
                            <FlightTakeoffIcon fontSize="small" />
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                fontWeight: 800,
                                display: 'flex',
                                fontSize: '1.25rem',
                                background: 'linear-gradient(45deg, #1a73e8 30%, #ffb300 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            SkyBook
                        </Typography>
                    </Box>

                    {!isMobile ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {navLinks.map((link) => (
                                <Button
                                    key={link.to}
                                    component={NavLink}
                                    to={link.to}
                                    variant="text"
                                    sx={{
                                        color: 'text.secondary',
                                        '&.active': { color: 'primary.main', bgcolor: 'primary.light' }
                                    }}
                                >
                                    {link.label}
                                </Button>
                            ))}
                            <Button variant="contained" component={Link} to="/flights" sx={{ ml: 2 }}>
                                Book Now
                            </Button>
                        </Box>
                    ) : (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </Container>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
