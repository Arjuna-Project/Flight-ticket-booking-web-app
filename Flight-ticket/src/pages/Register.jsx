import { useState } from 'react';
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
        <Box className="min-h-[90vh] flex items-center justify-center py-16 bg-gray-50">

            <Paper
                elevation={3}
                className="w-full max-w-md p-10 rounded-3xl text-center shadow-md"
            >

                {/* Logo */}
                <Box className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                    <FlightTakeoffIcon />
                </Box>

                <Typography variant="h5" className="font-bold mb-2">
                    Create Account
                </Typography>

                <Typography variant="body2" className="text-gray-500 mb-8">
                    Join SkyBook today — it's free!
                </Typography>

                {/* Form */}
                <Stack spacing={3}>

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
                            <Typography variant="caption" className="text-left block">
                                I agree to the{' '}
                                <Link href="#" className="text-blue-600 no-underline hover:underline">
                                    Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link href="#" className="text-blue-600 no-underline hover:underline">
                                    Privacy Policy
                                </Link>
                            </Typography>
                        }
                        className="mt-2 items-start"
                    />

                    <Button fullWidth size="large" className="py-4 mt-2 font-bold">
                        Register Now
                    </Button>

                </Stack>

                {/* Divider */}
                <Divider className="my-8">
                    <Typography variant="caption" className="px-2 text-gray-400">
                        OR
                    </Typography>
                </Divider>

                {/* Google */}
                <Button
                    fullWidth
                    variant="outlined"
                    color="inherit"
                    startIcon={<GoogleIcon fontSize="small" />}
                    className="py-4 border-gray-300 text-gray-900 hover:border-gray-400 hover:bg-gray-50"
                >
                    Sign up with Google
                </Button>

                {/* Login Link */}
                <Typography variant="body2" className="mt-8">
                    Already have an account?{' '}
                    <Link
                        component={RouterLink}
                        to="/login"
                        className="text-blue-600 font-semibold no-underline hover:underline"
                    >
                        Sign In
                    </Link>
                </Typography>

            </Paper>
        </Box>
    );
};

export default Register;