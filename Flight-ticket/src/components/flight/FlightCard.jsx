import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import StarIcon from '@mui/icons-material/Star';
import Button from '../ui/Button';
import Card from '../ui/Card';

const FlightCard = ({ flight }) => {
    const navigate = useNavigate();

    const getSeatColor = () => {
        if (flight.seatsAvailable <= 5) return 'error';
        if (flight.seatsAvailable <= 15) return 'warning';
        return 'success';
    };

    return (
        <Card hover padding="none" className="mb-4">
            <Box className="p-6">
                <Grid container spacing={4} alignItems="center">

                    {/* Airline Info */}
                    <Grid item xs={12} md={3}>
                        <Stack direction="row" spacing={3} alignItems="center">
                            <Box className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl">
                                ✈
                            </Box>

                            <Box>
                                <Typography variant="subtitle1" className="font-bold">
                                    {flight.airline}
                                </Typography>

                                <Typography variant="caption" className="text-gray-500">
                                    {flight.id} · {flight.class}
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Flight Path */}
                    <Grid item xs={12} md={6}>
                        <Box className="flex items-center justify-between md:px-8">

                            {/* Departure */}
                            <Box className="text-center">
                                <Typography variant="h5" className="font-bold">
                                    {flight.departure}
                                </Typography>

                                <Typography variant="subtitle2" className="font-semibold">
                                    {flight.fromCode}
                                </Typography>

                                <Typography variant="caption" className="text-gray-500">
                                    {flight.from}
                                </Typography>
                            </Box>

                            {/* Flight line */}
                            <Box className="flex-grow mx-4 relative flex flex-col items-center">
                                <Typography variant="caption" className="text-gray-500 mb-1">
                                    {flight.duration}
                                </Typography>

                                <Box className="w-full h-[2px] bg-gray-300 relative">
                                    <FlightTakeoffIcon
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-blue-600 text-xl"
                                    />
                                </Box>

                                <Typography
                                    variant="caption"
                                    className={`mt-1 font-semibold ${
                                        flight.stops === 0
                                            ? 'text-green-600'
                                            : 'text-orange-500'
                                    }`}
                                >
                                    {flight.stops === 0
                                        ? 'Non-stop'
                                        : `${flight.stops} Stop`}
                                </Typography>
                            </Box>

                            {/* Arrival */}
                            <Box className="text-center">
                                <Typography variant="h5" className="font-bold">
                                    {flight.arrival}
                                </Typography>

                                <Typography variant="subtitle2" className="font-semibold">
                                    {flight.toCode}
                                </Typography>

                                <Typography variant="caption" className="text-gray-500">
                                    {flight.to}
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>

                    {/* Pricing */}
                    <Grid item xs={12} md={3}>
                        <Box className="text-center md:text-right">
                            <Typography variant="caption" className="text-gray-500">
                                price per person
                            </Typography>

                            <Typography
                                variant="h4"
                                className="text-blue-600 font-bold my-1"
                            >
                                ₹{flight.price.toLocaleString('en-IN')}
                            </Typography>

                            <Button
                                onClick={() => navigate(`/flights/${flight.id}`)}
                                fullWidth
                                variant="contained"
                            >
                                View Details
                            </Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>

            <Divider />

            {/* Footer */}
            <Box className="px-6 py-3 bg-gray-50 flex justify-between items-center">
                <Stack direction="row" spacing={3} alignItems="center">

                    <Chip
                        label={`${flight.seatsAvailable} seats available`}
                        size="small"
                        color={getSeatColor()}
                        className="font-semibold"
                    />

                    <Box className="flex items-center gap-1">
                        <Typography variant="subtitle2" className="font-bold">
                            {flight.rating}
                        </Typography>

                        <StarIcon className="text-yellow-500 text-lg" />
                    </Box>

                </Stack>

                <Typography variant="caption" className="text-gray-500 font-medium">
                    Refundable · Free Meal · No hidden fees
                </Typography>
            </Box>

        </Card>
    );
};

export default FlightCard;