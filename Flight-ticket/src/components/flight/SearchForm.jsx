import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SearchIcon from '@mui/icons-material/Search';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import ClassIcon from '@mui/icons-material/Class';
import { cities } from '../../data/flights';
import Button from '../ui/Button';

const SearchForm = () => {
    const navigate = useNavigate();
    const [tripType, setTripType] = useState(0);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [passengers, setPassengers] = useState(1);
    const [travelClass, setTravelClass] = useState('Economy');

    const handleSwap = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/flights', {
            state: { from, to, date, passengers, travelClass, tripType: tripType === 0 ? 'one-way' : 'round-trip' },
        });
    };

    return (
        <Paper elevation={4} className="p-6 md:p-8 rounded-2xl shadow-md">

            {/* Trip Type Tabs */}
            <Box className="mb-8 flex justify-center">
                <Tabs
                    value={tripType}
                    onChange={(_, val) => setTripType(val)}
                    className="bg-gray-100 rounded-full p-1"
                    classes={{
                        indicator: 'h-full rounded-full bg-white shadow'
                    }}
                >
                    <Tab
                        label="One Way"
                        className="rounded-full min-w-[120px] z-10 normal-case font-semibold"
                    />
                    <Tab
                        label="Round Trip"
                        className="rounded-full min-w-[120px] z-10 normal-case font-semibold"
                    />
                </Tabs>
            </Box>

            <form onSubmit={handleSearch}>
                <Grid container spacing={3} alignItems="flex-end">

                    {/* From */}
                    <Grid item xs={12} md={5}>
                        <TextField
                            select
                            label="From"
                            fullWidth
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            required
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FlightTakeoffIcon className="text-blue-600" fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        >
                            {cities.map((city) => (
                                <MenuItem key={city.code} value={city.name}>
                                    {city.name} ({city.code})
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    {/* Swap */}
                    <Grid item xs={12} md={2} className="flex justify-center">
                        <IconButton
                            onClick={handleSwap}
                            className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:rotate-180 transition-all duration-300"
                        >
                            <SwapHorizIcon />
                        </IconButton>
                    </Grid>

                    {/* To */}
                    <Grid item xs={12} md={5}>
                        <TextField
                            select
                            label="To"
                            fullWidth
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            required
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FlightLandIcon className="text-blue-600" fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        >
                            {cities.map((city) => (
                                <MenuItem key={city.code} value={city.name}>
                                    {city.name} ({city.code})
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    {/* Departure */}
                    <Grid item xs={12} md={tripType === 1 ? 3 : 4}>
                        <TextField
                            label="Departure"
                            type="date"
                            fullWidth
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            InputLabelProps={{ shrink: true }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EventIcon className="text-blue-600" fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Return Date */}
                    {tripType === 1 && (
                        <Grid item xs={12} md={3}>
                            <TextField
                                label="Return"
                                type="date"
                                fullWidth
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                                required
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EventIcon className="text-blue-600" fontSize="small" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    )}

                    {/* Passengers */}
                    <Grid item xs={12} md={tripType === 1 ? 3 : 4}>
                        <TextField
                            select
                            label="Passengers"
                            fullWidth
                            value={passengers}
                            onChange={(e) => setPassengers(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PeopleIcon className="text-blue-600" fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        >
                            {[1,2,3,4,5,6,7,8,9].map((num) => (
                                <MenuItem key={num} value={num}>
                                    {num} {num === 1 ? 'Adult' : 'Adults'}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    {/* Class */}
                    <Grid item xs={12} md={tripType === 1 ? 3 : 4}>
                        <TextField
                            select
                            label="Class"
                            fullWidth
                            value={travelClass}
                            onChange={(e) => setTravelClass(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <ClassIcon className="text-blue-600" fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                        >
                            <MenuItem value="Economy">Economy</MenuItem>
                            <MenuItem value="Business">Business</MenuItem>
                            <MenuItem value="First Class">First Class</MenuItem>
                        </TextField>
                    </Grid>

                    {/* Search Button */}
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            size="large"
                            startIcon={<SearchIcon />}
                            className="py-4 text-lg font-bold"
                        >
                            Search Flights
                        </Button>
                    </Grid>

                </Grid>
            </form>
        </Paper>
    );
};

export default SearchForm;