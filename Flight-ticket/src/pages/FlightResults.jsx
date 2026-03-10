import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

import { flights } from "../data/flights";
import FlightCard from "../components/flight/FlightCard";
import Container from "../components/ui/Container";

const FlightResults = () => {
  const { state } = useLocation();

  const [priceRange, setPriceRange] = useState(10000);
  const [filterStops, setFilterStops] = useState("all");
  const [filterAirline, setFilterAirline] = useState("all");
  const [sortBy, setSortBy] = useState("price");

  const airlines = [...new Set(flights.map((f) => f.airline))];

  const filtered = useMemo(() => {
    let result = [...flights];

    if (filterStops !== "all")
      result = result.filter((f) => f.stops === parseInt(filterStops));

    if (filterAirline !== "all")
      result = result.filter((f) => f.airline === filterAirline);

    result = result.filter((f) => f.price <= priceRange);

    if (sortBy === "price") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "duration")
      result.sort((a, b) => a.duration.localeCompare(b.duration));
    else if (sortBy === "departure")
      result.sort((a, b) => a.departure.localeCompare(b.departure));

    return result;
  }, [filterStops, filterAirline, priceRange, sortBy]);

  return (
    <Box className="bg-gray-50 min-h-screen">

      {/* HEADER */}
      <Box className="bg-white border-b py-6">
        <Container>

          <Stack direction="row" spacing={3} alignItems="center">

            <Box className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <FlightTakeoffIcon />
            </Box>

            <Box>

              <Typography variant="h6" className="font-bold">
                {state?.from || "Anywhere"} → {state?.to || "Anywhere"}
              </Typography>

              <Typography className="text-gray-500 text-sm">
                {state?.date || "Flexible Date"} · {state?.passengers || 1} Passenger · {state?.travelClass || "Economy"}
              </Typography>

            </Box>

          </Stack>

        </Container>
      </Box>


      <Container className="py-10">

        <Grid container spacing={5}>

          {/* FILTER SIDEBAR */}
          <Grid item xs={12} md={3}>

            <Paper className="p-6 rounded-xl shadow-sm">

              <Stack spacing={6}>

                <Stack direction="row" spacing={1} alignItems="center">
                  <FilterListIcon className="text-blue-600" />
                  <Typography className="font-bold">
                    Filters
                  </Typography>
                </Stack>


                {/* PRICE FILTER */}
                <Box>

                  <Typography className="text-xs font-bold text-gray-500 mb-3 uppercase">
                    Max Price
                  </Typography>

                  <Slider
                    value={priceRange}
                    min={2000}
                    max={10000}
                    step={100}
                    onChange={(_, val) => setPriceRange(val)}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(v) => `₹${v}`}
                  />

                  <Box className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>₹2,000</span>
                    <span className="font-bold text-blue-600">
                      ₹{priceRange}
                    </span>
                    <span>₹10,000</span>
                  </Box>

                </Box>

                <Divider />

                {/* STOPS */}
                <Box>

                  <Typography className="text-xs font-bold text-gray-500 mb-2 uppercase">
                    Stops
                  </Typography>

                  <FormControl>

                    <RadioGroup
                      value={filterStops}
                      onChange={(e) => setFilterStops(e.target.value)}
                    >

                      <FormControlLabel value="all" control={<Radio size="small" />} label="All" />

                      <FormControlLabel value="0" control={<Radio size="small" />} label="Non-stop" />

                      <FormControlLabel value="1" control={<Radio size="small" />} label="1 Stop" />

                    </RadioGroup>

                  </FormControl>

                </Box>

                <Divider />

                {/* AIRLINES */}
                <Box>

                  <Typography className="text-xs font-bold text-gray-500 mb-2 uppercase">
                    Airlines
                  </Typography>

                  <FormControl>

                    <RadioGroup
                      value={filterAirline}
                      onChange={(e) => setFilterAirline(e.target.value)}
                    >

                      <FormControlLabel value="all" control={<Radio size="small" />} label="All Airlines" />

                      {airlines.map((a) => (
                        <FormControlLabel
                          key={a}
                          value={a}
                          control={<Radio size="small" />}
                          label={a}
                        />
                      ))}

                    </RadioGroup>

                  </FormControl>

                </Box>

              </Stack>

            </Paper>

          </Grid>


          {/* RESULTS */}
          <Grid item xs={12} md={9}>

            {/* SORT BAR */}
            <Box className="flex justify-between items-center mb-6">

              <Typography className="text-gray-500 text-sm">
                Showing{" "}
                <span className="font-bold text-blue-600">
                  {filtered.length}
                </span>{" "}
                flights
              </Typography>

              <Stack direction="row" spacing={2} alignItems="center">

                <SortIcon className="text-gray-400" />

                <Typography className="text-xs font-bold text-gray-500">
                  SORT BY
                </Typography>

                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  size="small"
                  variant="standard"
                  disableUnderline
                  className="text-sm font-bold text-blue-600"
                >
                  <MenuItem value="price">Price: Low to High</MenuItem>
                  <MenuItem value="duration">Duration</MenuItem>
                  <MenuItem value="departure">Departure Time</MenuItem>
                </Select>

              </Stack>

            </Box>


            {/* FLIGHT CARDS */}
            {filtered.length === 0 ? (

              <Paper className="p-16 text-center rounded-2xl">

                <Typography className="text-5xl mb-3">
                  ✈️
                </Typography>

                <Typography variant="h6" className="font-bold mb-1">
                  No Flights Found
                </Typography>

                <Typography className="text-gray-500">
                  Try adjusting your filters
                </Typography>

              </Paper>

            ) : (

              <Stack spacing={3}>

                {filtered.map((flight) => (
                  <FlightCard key={flight.id} flight={flight} />
                ))}

              </Stack>

            )}

          </Grid>

        </Grid>

      </Container>

    </Box>
  );
};

export default FlightResults;