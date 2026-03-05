import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';
import FlightIcon from '@mui/icons-material/Flight';

const ROWS = 10;
const COLS = ['A', 'B', 'C', 'D', 'E', 'F'];

const OCCUPIED_SEATS = new Set([
    '1A','1B','2C','2D','3E','3F','4A','4B','5C',
    '6D','6E','7A','7F','8B','8C','9E','10A','10D',
]);

const SeatMap = ({ onSeatSelect }) => {
    const [selected, setSelected] = useState(null);

    const handleSeat = (seat) => {
        if (OCCUPIED_SEATS.has(seat)) return;
        const next = selected === seat ? null : seat;
        setSelected(next);
        if (onSeatSelect) onSeatSelect(next);
    };

    return (
        <Paper className="p-8 rounded-2xl shadow-md">

            <Typography variant="subtitle1" className="font-bold mb-1">
                Select Your Seat
            </Typography>

            <Typography variant="body2" className="text-gray-500 mb-10">
                Tap an available seat to choose it
            </Typography>

            {/* Legend */}
            <Stack direction="row" spacing={6} className="mb-12" justifyContent="center">

                <Stack direction="row" spacing={2} alignItems="center">
                    <Box className="w-4 h-4 bg-gray-100 rounded border border-gray-300"/>
                    <Typography variant="caption" className="font-semibold">
                        Available
                    </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                    <Box className="w-4 h-4 bg-blue-600 rounded"/>
                    <Typography variant="caption" className="font-semibold">
                        Selected
                    </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                    <Box className="w-4 h-4 bg-gray-300 rounded"/>
                    <Typography variant="caption" className="font-semibold">
                        Occupied
                    </Typography>
                </Stack>

            </Stack>

            {/* Seat Map */}
            <Box className="max-h-[500px] overflow-y-auto py-8 bg-gray-50 rounded-2xl flex flex-col items-center border border-gray-200">

                <FlightIcon className="text-5xl text-gray-300 mb-8 rotate-180" />

                <Box className="inline-block">

                    {/* Column Labels */}
                    <Box className="flex mb-4 pl-10">
                        {COLS.map((col, i) => (
                            <Fragment key={col}>
                                {i === 3 && <Box className="w-10" />}
                                <Typography
                                    variant="caption"
                                    className="w-10 text-center font-bold text-gray-500"
                                >
                                    {col}
                                </Typography>
                            </Fragment>
                        ))}
                    </Box>

                    {/* Rows */}
                    {Array.from({ length: ROWS }, (_, ri) => {
                        const row = ri + 1;

                        return (
                            <Box key={row} className="flex items-center mb-4">

                                <Typography
                                    variant="caption"
                                    className="w-8 text-right mr-2 font-bold text-gray-500"
                                >
                                    {row}
                                </Typography>

                                {COLS.map((col, ci) => {
                                    const seat = `${row}${col}`;
                                    const isOccupied = OCCUPIED_SEATS.has(seat);
                                    const isSelected = selected === seat;

                                    return (
                                        <Fragment key={seat}>

                                            {ci === 3 && <Box className="w-10" />}

                                            <Tooltip
                                                title={isOccupied ? 'Occupied' : `Seat ${seat}`}
                                                arrow
                                            >
                                                <span>
                                                    <Button
                                                        variant={isSelected ? "contained" : "outlined"}
                                                        disabled={isOccupied}
                                                        onClick={() => handleSeat(seat)}
                                                        className={`min-w-10 w-10 h-11 p-0 m-1 rounded-lg text-xs font-bold transition-all duration-200
                                                        ${
                                                            isSelected
                                                                ? 'bg-blue-600 border-blue-600 text-white'
                                                                : isOccupied
                                                                ? 'bg-gray-300 border-none text-gray-100 cursor-not-allowed'
                                                                : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-blue-600'
                                                        }`}
                                                    >
                                                        {col}{row}
                                                    </Button>
                                                </span>
                                            </Tooltip>

                                        </Fragment>
                                    );
                                })}

                            </Box>
                        );
                    })}
                </Box>
            </Box>

            {/* Selected Seat Alert */}
            {selected && (
                <Alert severity="info" className="mt-8 rounded-xl font-semibold">
                    Seat {selected} selected
                </Alert>
            )}
        </Paper>
    );
};

export default SeatMap;