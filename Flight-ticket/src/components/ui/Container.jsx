import React from 'react';
import MuiContainer from '@mui/material/Container';

const Container = ({ children, maxWidth = 'lg', className = '', ...rest }) => {
  return (
    <MuiContainer maxWidth={maxWidth} className={className} {...rest}>
      {children}
    </MuiContainer>
  );
};

export default Container;