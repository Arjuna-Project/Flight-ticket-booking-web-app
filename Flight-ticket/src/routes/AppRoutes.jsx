import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import FlightResults from '../pages/FlightResults';
import FlightDetails from '../pages/FlightDetails';
import Booking from '../pages/Booking';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/flights" element={<FlightResults />} />
                <Route path="/flights/:id" element={<FlightDetails />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
