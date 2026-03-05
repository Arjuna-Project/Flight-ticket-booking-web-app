import React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Card = ({
  children,
  hover = false,
  padding = 'none',
  className = '',
  ...rest
}) => {
  return (
    <MuiCard
      className={`h-full transition-transform duration-200 ${
        hover ? 'hover:-translate-y-1' : ''
      } ${className}`}
      {...rest}
    >
      <CardContent className={padding === 'none' ? 'p-0' : 'p-4'}>
        {children}
      </CardContent>
    </MuiCard>
  );
};

export default Card;