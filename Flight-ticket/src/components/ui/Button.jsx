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
  className = '',
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
      className={className}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

export default Button;