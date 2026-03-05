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
    <Box onClick={handleDrawerToggle} className="text-center p-4">

      <Box
        component={Link}
        to="/"
        className="flex items-center justify-center mb-4 text-blue-600 no-underline"
      >
        <FlightTakeoffIcon className="mr-2" />
        <Typography variant="h6" className="font-extrabold">
          SkyBook
        </Typography>
      </Box>

      <List>
        {navLinks.map((link) => (
          <ListItem key={link.to} disablePadding>

            <ListItemButton
              component={NavLink}
              to={link.to}
              className="text-center"
              style={({ isActive }) =>
                isActive ? { color: '#1976d2', fontWeight: 'bold' } : {}
              }
            >
              <ListItemText primary={link.label} />
            </ListItemButton>

          </ListItem>
        ))}
      </List>

      <Button fullWidth component={Link} to="/flights" className="mt-4">
        Book Now
      </Button>

    </Box>
  );

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
      className="bg-white/95 backdrop-blur-md"
    >

      <Container>

        <Toolbar disableGutters className="h-[70px]">

          {/* Logo */}
          <Box
            component={Link}
            to="/"
            className="flex items-center flex-grow no-underline text-inherit"
          >

            <div className="w-9 h-9 bg-blue-600 rounded flex items-center justify-center text-white mr-2">
              <FlightTakeoffIcon fontSize="small" />
            </div>

            <Typography
              variant="h6"
              noWrap
              className="font-extrabold text-xl bg-gradient-to-r from-blue-600 to-yellow-400 bg-clip-text text-transparent"
            >
              SkyBook
            </Typography>

          </Box>


          {/* Desktop Menu */}
          {!isMobile ? (

            <Box className="flex items-center gap-2">

              {navLinks.map((link) => (

                <Button
                  key={link.to}
                  component={NavLink}
                  to={link.to}
                  variant="text"
                  className="text-gray-600"
                  style={({ isActive }) =>
                    isActive
                      ? { color: '#1976d2', backgroundColor: '#e3f2fd' }
                      : {}
                  }
                >
                  {link.label}
                </Button>

              ))}

              <Button
                variant="contained"
                component={Link}
                to="/flights"
                className="ml-4"
              >
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
      >
        {drawer}
      </Drawer>

    </AppBar>
  );
};

export default Navbar;