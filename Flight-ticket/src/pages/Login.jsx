import { useState } from 'react';
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
        <Box className="min-h-[80vh] flex items-center justify-center py-16 bg-gray-50">

            <Paper
                elevation={3}
                className="w-full max-w-md p-10 rounded-3xl text-center shadow-md"
            >

                {/* Logo */}
                <Box className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                    <FlightTakeoffIcon />
                </Box>

                {/* Heading */}
                <Typography variant="h5" className="font-bold mb-2">
                    Welcome Back
                </Typography>

                <Typography variant="body2" className="text-gray-500 mb-8">
                    Sign in to manage your flight bookings
                </Typography>

                {/* Form */}
                <Stack spacing={3}>

                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="name@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />

                    <Box className="text-left">

                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                        />

                        <Box className="text-right mt-2">
                            <Link
                                href="#"
                                variant="caption"
                                className="text-blue-600 font-semibold no-underline hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </Box>

                    </Box>

                    <Button
                        fullWidth
                        size="large"
                        className="py-4 font-semibold"
                    >
                        Sign In
                    </Button>

                </Stack>

                {/* Divider */}
                <Divider className="my-8">
                    <Typography variant="caption" className="px-2 text-gray-400">
                        OR
                    </Typography>
                </Divider>

                {/* Google Login */}
                <Button
                    fullWidth
                    variant="outlined"
                    color="inherit"
                    startIcon={<GoogleIcon fontSize="small" />}
                    className="py-4 border-gray-300 text-gray-900 hover:border-gray-400 hover:bg-gray-50"
                >
                    Continue with Google
                </Button>

                {/* Register Link */}
                <Typography variant="body2" className="mt-8">
                    Don't have an account?{' '}
                    <Link
                        component={RouterLink}
                        to="/register"
                        className="text-blue-600 font-semibold no-underline hover:underline"
                    >
                        Register
                    </Link>
                </Typography>

            </Paper>

        </Box>
    );
};

export default Login;