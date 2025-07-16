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
        boxShadow: '0 8px 20px rgba(241, 90, 36, 0.35)',
        '&:hover': {
          background: 'linear-gradient(to top right, #f77b2e, #e94e17)',
        },
      }}
    >
      <ChevronRightIcon />
    </IconButton>
  );
};

export default GradientButton;
