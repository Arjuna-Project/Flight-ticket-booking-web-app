import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FlightIcon from "@mui/icons-material/Flight";

import PassengerForm from "../components/flight/PassengerForm";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

const Booking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [confirmed, setConfirmed] = useState(false);
  const [formData, setFormData] = useState({});

  const bookingId = useMemo(() => {
    return `SKB-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
  }, []);

  const flight = state?.flight || {
    id: "AI-101",
    airline: "Air India",
    from: "Delhi",
    fromCode: "DEL",
    to: "Mumbai",
    toCode: "BOM",
    departure: "06:00",
    arrival: "08:10",
    duration: "2h 10m",
    price: 4500,
    class: "Economy",
  };

  const seat = state?.seat || "N/A";

  /* CONFIRMATION SCREEN */
  if (confirmed) {
    return (
      <Box className="bg-gray-50 min-h-screen flex items-center py-16">
        <Container maxWidth="sm">
          <Paper className="p-12 text-center rounded-2xl shadow-xl">
            <CheckCircleIcon className="text-green-500 text-[80px] mb-6" />

            <Typography variant="h4" className="font-bold mb-2">
              Booking Confirmed!
            </Typography>

            <Typography className="text-gray-500 mb-10">
              Your flight has been successfully booked.
            </Typography>

            {/* BOOKING DETAILS */}
            <Paper className="p-6 mb-10 text-left bg-gray-50 rounded-xl border">
              <Stack spacing={3}>
                <Box className="flex justify-between">
                  <Typography className="text-gray-500 text-sm">
                    BOOKING ID
                  </Typography>

                  <Typography className="font-bold text-blue-600">
                    {bookingId}
                  </Typography>
                </Box>

                <Box className="flex justify-between">
                  <Typography className="text-gray-500 text-sm">
                    ROUTE
                  </Typography>

                  <Typography className="font-bold">
                    {flight.from} → {flight.to}
                  </Typography>
                </Box>

                <Box className="flex justify-between">
                  <Typography className="text-gray-500 text-sm">
                    SEAT
                  </Typography>

                  <Typography className="font-bold">{seat}</Typography>
                </Box>

                <Box className="flex justify-between">
                  <Typography className="text-gray-500 text-sm">
                    PASSENGER
                  </Typography>

                  <Typography className="font-bold">
                    {formData?.firstName || "Passenger"}{" "}
                    {formData?.lastName || ""}
                  </Typography>
                </Box>

                <Divider />

                <Box className="flex justify-between items-center">
                  <Typography className="font-semibold">Total Paid</Typography>

                  <Typography className="text-blue-600 font-bold text-xl">
                    ₹{flight.price.toLocaleString("en-IN")}
                  </Typography>
                </Box>
              </Stack>
            </Paper>

            <Button
              fullWidth
              size="large"
              onClick={() => navigate("/")}
              className="py-3"
            >
              Back to Home
            </Button>
          </Paper>
        </Container>
      </Box>
    );
  }

  /* BOOKING FORM PAGE */

  return (
    <Box className="bg-gray-50 min-h-screen py-16">
      <Container>
        <Typography variant="h4" className="font-bold mb-10">
          Complete Your Booking
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* PASSENGER FORM */}
          <Grid item xs={12}>
            <PassengerForm onFormChange={setFormData} />
          </Grid>

          {/* BOOKING SUMMARY */}
          <Grid item xs={12} className="flex justify-center">
            <Box className="sticky top-[100px]">
              <Paper className="p-8 rounded-xl shadow-md w-[420px]">
                <Typography className="font-bold mb-6">
                  Booking Summary
                </Typography>

                {/* FLIGHT CARD */}
                <Box className="p-5 mb-6 rounded-xl border border-blue-200 bg-blue-50">
                  <Box className="flex items-center gap-3 mb-4">
                    <FlightIcon className="rotate-90 text-blue-600" />

                    <Box>
                      <Typography className="font-bold">
                        {flight.airline}
                      </Typography>

                      <Typography className="text-sm text-gray-500">
                        {flight.id}
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="flex justify-between items-center">
                    <Box className="text-center">
                      <Typography className="font-bold">
                        {flight.departure}
                      </Typography>

                      <Typography className="text-sm">
                        {flight.fromCode}
                      </Typography>
                    </Box>

                    <Divider className="flex-grow mx-3 border-dashed" />

                    <Box className="text-center">
                      <Typography className="font-bold">
                        {flight.arrival}
                      </Typography>

                      <Typography className="text-sm">
                        {flight.toCode}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* DETAILS */}
                <Stack spacing={2} className="mb-6">
                  <Box className="flex justify-between">
                    <Typography className="text-gray-500 text-sm">
                      Class
                    </Typography>

                    <Typography className="font-semibold">
                      {flight.class}
                    </Typography>
                  </Box>

                  <Box className="flex justify-between">
                    <Typography className="text-gray-500 text-sm">
                      Seat
                    </Typography>

                    <Typography className="font-semibold">{seat}</Typography>
                  </Box>

                  <Divider />

                  <Box className="flex justify-between items-center">
                    <Typography className="font-semibold">
                      Total Amount
                    </Typography>

                    <Typography className="text-blue-600 font-bold text-xl">
                      ₹{flight.price.toLocaleString("en-IN")}
                    </Typography>
                  </Box>
                </Stack>

                <Button
                  fullWidth
                  size="large"
                  onClick={() => setConfirmed(true)}
                  className="py-3"
                >
                  Confirm & Pay
                </Button>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Booking;
