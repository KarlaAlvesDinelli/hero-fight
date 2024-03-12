'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar/SearchBar';
import { HeroesContext } from '@/app/contexts/HeroesContext';

export default function Header() {

  const {search, setSearch} = React.useContext(HeroesContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'indigo' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Fight Hero
          </Typography>
          <SearchBar search={search} setSearch={setSearch}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
