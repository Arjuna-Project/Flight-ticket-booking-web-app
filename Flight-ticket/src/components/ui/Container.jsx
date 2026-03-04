import React from 'react';
import MuiContainer from '@mui/material/Container';

const Container = ({ children, maxWidth = 'lg', sx = {}, ...rest }) => {
    return (
        <MuiContainer maxWidth={maxWidth} sx={sx} {...rest}>
            {children}
        </MuiContainer>
    );
};

export default Container;
