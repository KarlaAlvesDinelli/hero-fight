'use client';

import React, { createContext, useState } from 'react';

export const HeroesContext = createContext();

const HeroesContextProvider = ({children}) => {

  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [winner, setWinner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  const value = {
    heroes,
    setHeroes,
    loading,
    setLoading,
    selectedHeroes,
    setSelectedHeroes,
    winner,
    setWinner,
    isModalOpen,
    setIsModalOpen,
    search,
    setSearch
  };

  return (
    <HeroesContext.Provider value={value}>
      {children}
    </HeroesContext.Provider>
  );
};

export default HeroesContextProvider;
