import React from 'react';
import { IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const GradientButton = () => {
  return (
    <IconButton
      sx={{
        background: 'linear-gradient(to top right, #f88f40, #f15a24)',
        color: '#fff',
        borderRadius: '12px',
        width: '50px',
        height: '50px',
        '&:hover': {
          background: 'linear-gradient(to top right, #f77b2e, #e94e17)',
        },
      }}
    >
      <ChevronRightIcon  sx={{ fontSize: 50 }}/>
    </IconButton>
  );
};

export default GradientButton;
