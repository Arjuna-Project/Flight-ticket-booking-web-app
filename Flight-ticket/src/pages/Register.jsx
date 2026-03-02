import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import GoogleIcon from '@mui/icons-material/Google';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Register = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
    });

    return (
        <Box
            sx={{
                minHeight: '90vh',
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
                    maxWidth: 500,
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
                    Create Account
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    Join SkyBook today — it's free!
                </Typography>

                <Stack spacing={2.5}>
                    <Input
                        label="Full Name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        margin="none"
                    />
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="name@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        margin="none"
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Create a strong password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        margin="none"
                    />
                    <Input
                        label="Confirm Password"
                        type="password"
                        placeholder="Re-enter password"
                        value={form.confirm}
                        onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                        margin="none"
                    />

                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label={
                            <Typography variant="caption" sx={{ textAlign: 'left', display: 'block' }}>
                                I agree to the <Link href="#" sx={{ color: 'primary.main', textDecoration: 'none' }}>Terms of Service</Link> and <Link href="#" sx={{ color: 'primary.main', textDecoration: 'none' }}>Privacy Policy</Link>
                            </Typography>
                        }
                        sx={{ mt: 1 }}
                    />

                    <Button fullWidth size="large" sx={{ py: 1.5, mt: 1 }}>
                        Register Now
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
                    Sign up with Google
                </Button>

                <Typography variant="body2" sx={{ mt: 4 }}>
                    Already have an account? {' '}
                    <Link component={RouterLink} to="/login" sx={{ color: 'primary.main', fontWeight: 700, textDecoration: 'none' }}>
                        Sign In
                    </Link>
                </Typography>
            </Paper>
        </Box>
    );
};

export default Register;
