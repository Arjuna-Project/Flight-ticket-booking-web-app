import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';

const PassengerForm = ({ onFormChange }) => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        passport: '',
        email: '',
        phone: '',
        nationality: '',
    });

    const handleChange = (field, value) => {
        const updated = { ...form, [field]: value };
        setForm(updated);
        if (onFormChange) onFormChange(updated);
    };

    return (
        <Paper className="p-8 rounded-2xl shadow-md">

            {/* Header */}
            <Stack direction="row" spacing={3} alignItems="center" className="mb-10">

                <Box className="w-11 h-11 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <PersonIcon />
                </Box>

                <Box>
                    <Typography variant="subtitle1" className="font-bold">
                        Passenger Details
                    </Typography>

                    <Typography variant="caption" className="text-gray-500">
                        Please enter details exactly as on your ID
                    </Typography>
                </Box>

            </Stack>

            {/* Form Grid */}
            <Grid container spacing={3}>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="First Name"
                        placeholder="John"
                        value={form.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        required
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Last Name"
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        required
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Date of Birth"
                        type="date"
                        value={form.dob}
                        onChange={(e) => handleChange('dob', e.target.value)}
                        required
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        select
                        label="Gender"
                        value={form.gender}
                        onChange={(e) => handleChange('gender', e.target.value)}
                        required
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                    >
                        <MenuItem value="">Select Gender</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Passport / National ID"
                        placeholder="P1234567"
                        value={form.passport}
                        onChange={(e) => handleChange('passport', e.target.value)}
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Nationality"
                        placeholder="Indian"
                        value={form.nationality}
                        onChange={(e) => handleChange('nationality', e.target.value)}
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        placeholder="john.doe@email.com"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Phone Number"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>

            </Grid>
        </Paper>
    );
};

export default PassengerForm;