import React from 'react';
import MuiButton from '@mui/material/Button';

const Button = ({
    children,
    variant = 'contained',
    size = 'medium',
    color = 'primary',
    fullWidth = false,
    startIcon,
    onClick,
    type = 'button',
    disabled = false,
    sx = {},
    ...rest
}) => {
    return (
        <MuiButton
            variant={variant === 'primary' ? 'contained' : variant}
            size={size}
            color={color}
            fullWidth={fullWidth}
            startIcon={startIcon}
            onClick={onClick}
            type={type}
            disabled={disabled}
            sx={sx}
            {...rest}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
