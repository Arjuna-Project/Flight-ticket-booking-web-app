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

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import SearchForm from "../components/flight/SearchForm";

/* ─── DATA ──────────────────────────────────────────────────── */

const features = [
  {
    icon: <ShieldIcon />,
    title: "Safe & Secure",
    desc: "Enterprise-grade encryption protects every booking and personal detail.",
    stat: "256-bit SSL",
  },
  {
    icon: <LocalAtmIcon />,
    title: "Best Price Guarantee",
    desc: "We match prices across all major airlines so you never overpay.",
    stat: "₹200 avg. saving",
  },
  {
    icon: <AccessTimeIcon />,
    title: "24/7 Support",
    desc: "Round-the-clock help via live chat and phone, whenever you need it.",
    stat: "<2 min response",
  },
  {
    icon: <PublicIcon />,
    title: "500+ Destinations",
    desc: "Fly across India or worldwide with 50+ partner airlines.",
    stat: "50+ airlines",
  },
];

const popularRoutes = [
  {
    from: "Delhi",
    fromCode: "DEL",
    to: "Mumbai",
    toCode: "BOM",
    price: "₹3,200",
    gradient: "from-blue-500 to-violet-600",
  },
  {
    from: "Mumbai",
    fromCode: "BOM",
    to: "Goa",
    toCode: "GOI",
    price: "₹2,500",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    from: "Bangalore",
    fromCode: "BLR",
    to: "Hyderabad",
    toCode: "HYD",
    price: "₹2,100",
    gradient: "from-violet-500 to-purple-700",
  },
  {
    from: "Delhi",
    fromCode: "DEL",
    to: "Kolkata",
    toCode: "CCU",
    price: "₹3,800",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    from: "Chennai",
    fromCode: "MAA",
    to: "Delhi",
    toCode: "DEL",
    price: "₹4,100",
    gradient: "from-teal-500 to-green-600",
  },
  {
    from: "Mumbai",
    fromCode: "BOM",
    to: "Jaipur",
    toCode: "JAI",
    price: "₹3,600",
    gradient: "from-rose-500 to-pink-600",
  },
];

const stats = [
  { label: "Happy Travellers", value: "2M+", icon: "😊" },
  { label: "Flights Booked", value: "10M+", icon: "✈️" },
  { label: "Airlines", value: "50+", icon: "🌐" },
  { label: "Destinations", value: "500+", icon: "📍" },
];

/* ─── SECTION HEADER ─────────────────────────────────────────── */

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <Typography
      variant="h4"
      className="!font-extrabold !tracking-tight !text-slate-900 !mb-1"
    >
      {title}
    </Typography>
    <Typography className="!text-slate-500 !text-base">{subtitle}</Typography>
  </div>
);

/* ─── HOME ───────────────────────────────────────────────────── */

const Home = () => (
  <Box>
    {/* ── HERO ── */}
    <Box className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-600 pt-20 pb-28 md:pt-24 md:pb-36 relative overflow-hidden">
      <Container>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* LEFT — copy */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3.5}>
              {/* badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-300/40 bg-yellow-300/10 w-fit">
                <TrendingUpIcon className="!text-yellow-300 !text-base" />
                <Typography className="!text-yellow-300 !text-xs !font-bold !tracking-wide">
                  10,000+ flights available today
                </Typography>
              </div>

              {/* headline */}
              <div>
                <Typography
                  component="h1"
                  className="!text-6xl md:!text-7xl !font-black !leading-tight !tracking-tight !text-white"
                >
                  Fly Anywhere
                </Typography>

                <Typography
                  component="h1"
                  className="!text-6xl md:!text-7xl !font-black !leading-tight !tracking-tight bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent"
                >
                  Anytime 
                </Typography>
              </div>

              <Typography className="!text-white/75 !text-xl !leading-relaxed max-w-sm">
                Book flights at the best prices with SkyBook — fast, secure and
                reliable.
              </Typography>

              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button component={RouterLink} to="/register" size="large">
                  Get Started
                </Button>
                <Button
                  component={RouterLink}
                  to="/flights"
                  variant="outlined"
                  startIcon={<EastIcon />}
                  size="large"
                  className="!border-white/50 !text-white hover:!bg-white hover:!text-blue-600 hover:!border-white"
                >
                  Browse Flights
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* RIGHT — search card */}
          <Grid item xs={12} md={7}>
            <Box className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <SearchForm />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* ── STATS ── */}
    <Box className="bg-slate-50 py-12 md:py-16">
      <Container>
        {/* 4 equal columns on md+, 2 columns on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center py-6 px-4 bg-white rounded-2xl border border-slate-200 transition-shadow duration-200 hover:shadow-lg"
            >
              <Typography className="!text-3xl !leading-none !mb-2">
                {stat.icon}
              </Typography>
              <Typography className="!text-4xl !font-extrabold !text-slate-900 !leading-none">
                {stat.value}
              </Typography>
              <Typography className="!text-sm !text-slate-400 !font-medium !mt-1">
                {stat.label}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </Box>

    {/* ── POPULAR ROUTES ── */}
    <Box className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader
          title="Popular Routes"
          subtitle="Explore the most booked destinations"
        />

        {/* 3 columns on md+, 2 on sm, 1 on xs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {popularRoutes.map((route) => (
            <RouterLink
              key={route.fromCode + route.toCode}
              to="/flights"
              className="block no-underline bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-transparent"
              style={{ textDecoration: "none" }}
            >
              {/* colour banner */}
              <div className={`h-20 bg-gradient-to-r ${route.gradient}`} />

              <div className="p-5">
                {/* city row */}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography className="!font-bold !text-xl !text-slate-800 whitespace-nowrap">
                    {route.from}
                  </Typography>
                  <div className="flex-1 border-t-2 border-dashed border-slate-200" />
                  <FlightTakeoffIcon className="!text-xl !text-blue-600 rotate-45" />
                  <div className="flex-1 border-t-2 border-dashed border-slate-200" />
                  <Typography className="!font-bold !text-xl !text-slate-800 whitespace-nowrap">
                    {route.to}
                  </Typography>
                </Stack>

                {/* code + price row */}
                <div className="flex items-center justify-between mt-3">
                  <Typography className="!text-sm !text-slate-400 !font-semibold !tracking-wide">
                    {route.fromCode} → {route.toCode}
                  </Typography>
                  <Typography className="!font-extrabold !text-2xl !text-blue-600">
                    {route.price}
                  </Typography>
                </div>
              </div>
            </RouterLink>
          ))}
        </div>
      </Container>
    </Box>

    {/* ── FEATURES ── */}
    <Box className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          title="Why Choose SkyBook"
          subtitle="Trusted by millions of travellers"
        />

        {/* 4 columns on md+, 2 on sm, 1 on xs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-7 bg-white rounded-2xl border border-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-transparent"
            >
              {/* icon box */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4 [&>svg]:text-2xl">
                {feature.icon}
              </div>

              <Typography className="!font-bold !text-lg !text-slate-800 !mb-2">
                {feature.title}
              </Typography>

              <Typography className="!text-lg !text-slate-500 !leading-relaxed flex-1">
                {feature.desc}
              </Typography>

              {/* stat pill */}
              <div className="mt-4 px-3 py-1 rounded-full bg-blue-50">
                <Typography className="!text-lg !font-bold !text-blue-600">
                  {feature.stat}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Box>
  </Box>
);

export default Home;
