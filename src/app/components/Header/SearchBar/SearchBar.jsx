import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, IconButton, styled } from '@mui/material';

const StyledSearchBar = styled('section')({
  display: 'flex',
  backgroundColor: 'white',
  maxWidth: 'md',
  boxShadow: '0px 2px 5px 1px rgba(0,0,0,0.1)',
  borderRadius: '4px', 
  justifyContent: 'space-between',
  paddingRight: '3px',
  width: '20%',
  height: '40px', 
  '& .MuiInputBase-root': {
    flexGrow: 1,
  },
});

const SearchBar = ({ search, setSearch }) => {

  return (
    <StyledSearchBar>
      <InputBase
        name="search"
        className="p-3 grow outline-none text-lg font-medium text-gray-800 placeholder-gray-800"
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoComplete="new-password"
      />
      <IconButton
        type="button"
        aria-label="search"
        sx={{ color: 'indigo.500', width: '30px', height: '30px', top: '5px'}} 
      >
        <SearchIcon />
      </IconButton>
    </StyledSearchBar>
  );
};

export default SearchBar;
