import React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Card = ({
    children,
    hover = false,
    padding = 'none',
    sx = {},
    ...rest
}) => {
    return (
        <MuiCard
            sx={{
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': hover ? { transform: 'translateY(-4px)' } : {},
                ...sx
            }}
            {...rest}
        >
            <CardContent sx={{ p: padding === 'none' ? 0 : 2, '&:last-child': { pb: padding === 'none' ? 0 : 2 } }}>
                {children}
            </CardContent>
        </MuiCard>
    );
};

export default Card;
