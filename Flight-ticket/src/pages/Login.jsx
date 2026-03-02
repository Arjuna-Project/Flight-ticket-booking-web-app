import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import GoogleIcon from '@mui/icons-material/Google';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });

    return (
        <Box
            sx={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 8,
                bgcolor: 'grey.50'
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    p: 5,
                    width: '100%',
                    maxWidth: 450,
                    textAlign: 'center',
                    borderRadius: 3
                }}
            >
                <Box
                    sx={{
                        width: 48,
                        height: 48,
                        bgcolor: 'primary.main',
                        color: 'white',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3
                    }}
                >
                    <FlightTakeoffIcon />
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                    Welcome Back
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    Sign in to manage your flight bookings
                </Typography>

                <Stack spacing={3}>
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="name@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <Box sx={{ textAlign: 'left' }}>
                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                        />
                        <Box sx={{ textAlign: 'right', mt: 1 }}>
                            <Link href="#" variant="caption" sx={{ fontWeight: 600, color: 'primary.main', textDecoration: 'none' }}>
                                Forgot Password?
                            </Link>
                        </Box>
                    </Box>

                    <Button fullWidth size="large" sx={{ py: 1.5 }}>
                        Sign In
                    </Button>
                </Stack>

                <Divider sx={{ my: 4 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ px: 1 }}>OR</Typography>
                </Divider>

                <Button
                    fullWidth
                    variant="outlined"
                    color="inherit"
                    startIcon={<GoogleIcon fontSize="small" />}
                    sx={{
                        py: 1.5,
                        borderColor: 'grey.300',
                        color: 'grey.900',
                        '&:hover': { borderColor: 'grey.400', bgcolor: 'grey.50' }
                    }}
                >
                    Continue with Google
                </Button>

                <Typography variant="body2" sx={{ mt: 4 }}>
                    Don't have an account? {' '}
                    <Link component={RouterLink} to="/register" sx={{ color: 'primary.main', fontWeight: 700, textDecoration: 'none' }}>
                        Register
                    </Link>
                </Typography>
            </Paper>
        </Box>
    );
};

export default Login;
