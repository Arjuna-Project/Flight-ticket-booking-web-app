import { useState } from "react";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import StarIcon from "@mui/icons-material/Star";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { flights } from "../data/flights";
import SeatMap from "../components/flight/SeatMap";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";


const FlightDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSeat, setSelectedSeat] = useState(null);

  const flight = flights.find((f) => f.id === id) || flights[0];

  return (
    <Box className="bg-gray-50 min-h-screen py-12">

      <Container>

        {/* Breadcrumbs */}
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          className="mb-8"
        >
          <Link component={RouterLink} to="/" underline="hover">
            Home
          </Link>

          <Link component={RouterLink} to="/flights" underline="hover">
            Flights
          </Link>

          <Typography className="font-bold">
            {flight.id}
          </Typography>
        </Breadcrumbs>

        <Grid container spacing={4} justifyContent="center">

          {/* LEFT SECTION */}
          <Grid item xs={12} md={9} lg={8}>

            <Stack spacing={4}>

              {/* FLIGHT HEADER */}
              <Paper className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">

                <Box className="p-8">

                  <Box className="flex justify-between items-center mb-10">

                    <Box className="flex items-center gap-4">

                      <Box className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center text-xl">
                        ✈
                      </Box>

                      <Box>
                        <Typography variant="h5" className="font-bold">
                          {flight.airline}
                        </Typography>

                        <Typography variant="body2" className="opacity-80">
                          {flight.id} · {flight.class}
                        </Typography>
                      </Box>

                    </Box>

                    <Box className="text-right">

                      <Typography variant="caption" className="opacity-80">
                        Rating
                      </Typography>

                      <Box className="flex items-center justify-end gap-1">

                        <Typography className="font-bold">
                          {flight.rating}
                        </Typography>

                        <StarIcon className="text-yellow-400" />

                      </Box>

                    </Box>

                  </Box>

                  <Grid container spacing={4} alignItems="center">

                    <Grid item xs={4} className="text-center">

                      <Typography variant="h4" className="font-bold">
                        {flight.departure}
                      </Typography>

                      <Typography className="font-semibold">
                        {flight.fromCode}
                      </Typography>

                      <Typography className="opacity-80">
                        {flight.from}
                      </Typography>

                    </Grid>

                    <Grid item xs={4}>

                      <Box className="flex flex-col items-center">

                        <Typography className="text-sm opacity-80 mb-1">
                          {flight.duration}
                        </Typography>

                        <Box className="w-full border-t border-white/40 relative">

                          <Box className="absolute left-1/2 -translate-x-1/2 -top-2">
                            ✈
                          </Box>

                        </Box>

                        <Typography className="text-sm font-semibold mt-1">
                          {flight.stops === 0 ? "Non-stop" : `${flight.stops} Stop`}
                        </Typography>

                      </Box>

                    </Grid>

                    <Grid item xs={4} className="text-center">

                      <Typography variant="h4" className="font-bold">
                        {flight.arrival}
                      </Typography>

                      <Typography className="font-semibold">
                        {flight.toCode}
                      </Typography>

                      <Typography className="opacity-80">
                        {flight.to}
                      </Typography>

                    </Grid>

                  </Grid>

                </Box>

              </Paper>

              {/* SEAT MAP */}
              <SeatMap onSeatSelect={setSelectedSeat} />

            </Stack>

          </Grid>


          {/* RIGHT SIDEBAR */}
          <Grid item xs={12} md={6} lg={4}>

            <Box className="flex justify-center">

              <Paper className="p-8 rounded-xl shadow-sm">

                <Typography className="font-bold mb-6">
                  Fare Summary
                </Typography>

                <Stack spacing={2} className="mb-6">

                  <Box className="flex justify-between">
                    <Typography className="text-gray-500">
                      Base Fare
                    </Typography>

                    <Typography className="font-bold">
                      ₹{(flight.price * 0.85).toFixed(0)}
                    </Typography>
                  </Box>

                  <Box className="flex justify-between">
                    <Typography className="text-gray-500">
                      Taxes
                    </Typography>

                    <Typography className="font-bold">
                      ₹{(flight.price * 0.15).toFixed(0)}
                    </Typography>
                  </Box>

                  {selectedSeat && (
                    <Box className="flex justify-between">
                      <Typography className="text-gray-500">
                        Seat Selection
                      </Typography>

                      <Typography className="text-green-600 font-bold">
                        Free
                      </Typography>
                    </Box>
                  )}

                  <Divider />

                  <Box className="flex justify-between items-center">

                    <Typography className="font-bold">
                      Total
                    </Typography>

                    <Typography className="text-blue-600 font-bold text-xl">
                      ₹{flight.price.toLocaleString("en-IN")}
                    </Typography>

                  </Box>

                </Stack>

                {selectedSeat ? (
                  <Alert severity="success" className="mb-6">
                    Seat {selectedSeat} selected
                  </Alert>
                ) : (
                  <Alert severity="info" className="mb-6">
                    Please select a seat
                  </Alert>
                )}

                <Button
                  fullWidth
                  size="large"
                  disabled={!selectedSeat}
                  onClick={() =>
                    navigate("/booking", {
                      state: { flight, seat: selectedSeat },
                    })
                  }
                >
                  Book Now
                </Button>

                <Typography className="text-xs text-center mt-4 text-gray-500">
                  Free cancellation within 24 hours
                </Typography>

              </Paper>

            </Box>

          </Grid>

        </Grid>

      </Container>

    </Box>
  );
};

export default FlightDetails;