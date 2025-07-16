import React from 'react';
import { InputBase, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Paper
      component="form"
      sx={{
        marginTop: '.5rem',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        border: '1px solid rgb(246, 246, 247)',
        borderRadius: '4rem',
        padding: '2px 8px',
        boxShadow: 'none',
        backgroundColor: '#fff',
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <IconButton sx={{ p: '10px' }} disabled>
        <SearchIcon color="action" />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search here..."
        inputProps={{ 'aria-label': 'search' }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Paper>
  );
};

export default SearchBar;
