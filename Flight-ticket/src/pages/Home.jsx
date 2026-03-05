import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ShieldIcon from "@mui/icons-material/Shield";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PublicIcon from "@mui/icons-material/Public";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EastIcon from "@mui/icons-material/East";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import BoltIcon from "@mui/icons-material/Bolt";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import SearchForm from "../components/flight/SearchForm";

/* FEATURES */
const features = [
  {
    icon: <ShieldIcon className="text-[28px]" />,
    title: "Safe & Secure",
    desc: "Enterprise-grade encryption protects every booking and personal detail.",
    stat: "256-bit SSL",
  },
  {
    icon: <LocalAtmIcon className="text-[28px]" />,
    title: "Best Price Guarantee",
    desc: "We match prices across all major airlines.",
    stat: "₹200 avg. saving",
  },
  {
    icon: <AccessTimeIcon className="text-[28px]" />,
    title: "24/7 Customer Support",
    desc: "Round-the-clock support via chat and call.",
    stat: "<2 min response",
  },
  {
    icon: <PublicIcon className="text-[28px]" />,
    title: "500+ Destinations",
    desc: "Fly across India or worldwide.",
    stat: "50+ airlines",
  },
];

/* ROUTES */
const popularRoutes = [
  { from: "Delhi", fromCode: "DEL", to: "Mumbai", toCode: "BOM", price: "₹3,200", gradient: "from-blue-500 to-violet-600" },
  { from: "Mumbai", fromCode: "BOM", to: "Goa", toCode: "GOI", price: "₹2,500", gradient: "from-cyan-500 to-blue-500" },
  { from: "Bangalore", fromCode: "BLR", to: "Hyderabad", toCode: "HYD", price: "₹2,100", gradient: "from-violet-500 to-purple-700" },
  { from: "Delhi", fromCode: "DEL", to: "Kolkata", toCode: "CCU", price: "₹3,800", gradient: "from-amber-500 to-orange-600" },
  { from: "Chennai", fromCode: "MAA", to: "Delhi", toCode: "DEL", price: "₹4,100", gradient: "from-teal-500 to-green-600" },
  { from: "Mumbai", fromCode: "BOM", to: "Jaipur", toCode: "JAI", price: "₹3,600", gradient: "from-rose-500 to-pink-600" },
];

/* STATS */
const stats = [
  { label: "Happy Travellers", value: "2M+", icon: "😊" },
  { label: "Flights Booked", value: "10M+", icon: "✈️" },
  { label: "Airlines", value: "50+", icon: "🌐" },
  { label: "Destinations", value: "500+", icon: "📍" },
];

const Home = () => (
  <Box>

    {/* HERO SECTION */}
    <Box className="hero-gradient py-20">

      <Container>
        <Grid container spacing={6} alignItems="center">

          {/* LEFT TEXT */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-amber-400 text-xs font-bold border border-amber-400/30 bg-amber-400/10 w-fit">
                <TrendingUpIcon className="text-base" />
                10,000+ flights available today
              </span>

              <Typography className="text-4xl font-bold text-white">
                Fly Anywhere,
              </Typography>

              <Typography className="text-4xl font-bold gradient-text">
                Anytime ✈️
              </Typography>

              <Typography className="text-white/70 text-lg">
                Book flights at the best prices with SkyBook.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button component={RouterLink} to="/register">
                  Get Started
                </Button>

                <Button
                  component={RouterLink}
                  to="/flights"
                  variant="outlined"
                  startIcon={<EastIcon />}
                >
                  Browse Flights
                </Button>
              </Stack>

            </Stack>
          </Grid>

          {/* SEARCH FORM */}
          <Grid item xs={12} md={7}>
            <Box className="bg-white p-6 rounded-2xl shadow-lg">
              <SearchForm />
            </Box>
          </Grid>

        </Grid>
      </Container>

    </Box>


    {/* STATS SECTION */}
    <Box className="bg-gray-50 py-16">
      <Container>
        <Grid container spacing={4}>
          {stats.map((stat) => (
            <Grid item xs={6} md={3} key={stat.label}>
              <Box className="text-center">
                <Typography className="text-3xl">{stat.icon}</Typography>
                <Typography className="text-xl font-bold">{stat.value}</Typography>
                <Typography className="text-gray-500 text-sm">
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>


    {/* POPULAR ROUTES */}
    <Box className="py-20">
      <Container>

        <Box className="text-center mb-12">
          <Typography variant="h4" className="font-bold mb-2">
            Popular Routes
          </Typography>
          <Typography className="text-gray-500">
            Explore most booked destinations
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {popularRoutes.map((route) => (
            <Grid item xs={12} sm={6} md={4} key={route.fromCode + route.toCode}>

              <Box
                component={RouterLink}
                to="/flights"
                className="block bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition"
              >

                <Box className={`h-20 bg-gradient-to-r ${route.gradient}`} />

                <Box className="p-5">

                  <Stack direction="row" alignItems="center" spacing={1}>

                    <Typography className="font-bold">
                      {route.from}
                    </Typography>

                    <Box className="flex-1 border-t border-dashed border-gray-300" />

                    <FlightTakeoffIcon className="text-blue-600 rotate-45" />

                    <Box className="flex-1 border-t border-dashed border-gray-300" />

                    <Typography className="font-bold">
                      {route.to}
                    </Typography>

                  </Stack>

                  <Stack direction="row" justifyContent="space-between" mt={2}>
                    <Typography variant="caption">
                      {route.fromCode} → {route.toCode}
                    </Typography>

                    <Typography className="font-bold text-blue-600">
                      {route.price}
                    </Typography>
                  </Stack>

                </Box>

              </Box>

            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>


    {/* FEATURES */}
    <Box className="bg-white py-20">
      <Container>

        <Box className="text-center mb-12">
          <Typography variant="h4" className="font-bold mb-2">
            Why Choose SkyBook
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} md={3} key={feature.title}>

              <Box className="text-center p-6 border rounded-xl hover:shadow-lg">

                <Box className="text-blue-600 mb-3 flex justify-center">
                  {feature.icon}
                </Box>

                <Typography className="font-bold mb-2">
                  {feature.title}
                </Typography>

                <Typography className="text-gray-500 text-sm">
                  {feature.desc}
                </Typography>

                <Typography className="text-blue-600 font-bold mt-2">
                  {feature.stat}
                </Typography>

              </Box>

            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>

  </Box>
);

export default Home;