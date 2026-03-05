import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const Input = ({
  label,
  id,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  icon,
  error,
  helperText,
  fullWidth = true,
  variant = 'outlined',
  className = '',
  ...rest
}) => {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error || helperText}
      fullWidth={fullWidth}
      variant={variant}
      className={className}
      InputProps={{
        startAdornment: icon ? (
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        ) : null,
      }}
      margin="normal"
      {...rest}
    />
  );
};

export default Input;