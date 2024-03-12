'use client';

import React, { useContext } from 'react';
import CardHero from './CardHero/CardHero';
import { HeroesContext } from '@/app/contexts/HeroesContext';
import getHeroes from '@/api/getHeroes';
import useHeroSelection from '@/app/hooks/useHeroSelection';
import { calculateTotalPower } from '@/app/utils/calculateTotalPower';
import ModalBattle from '../Modal/Modal';

export default function ListHeroes() {

  const {
    heroes,
    setHeroes,
    setLoading,
    selectedHeroes,
    winner,
    isModalOpen,
    search
  } = useContext(HeroesContext);

  const { handleHeroSelect, closeModal } = useHeroSelection();

  React.useEffect(() => {
    getHeroes().then((response) => {
      setHeroes(response);
      setLoading(false);
    });
  }, [setHeroes, setLoading]);

  const filteredHeroes = search.length > 0
    ? heroes.filter(hero => hero.name.toLowerCase().includes(search.toLowerCase()))
    : [];
  
  return (
    <main>
      {isModalOpen && (
        <ModalBattle 
          heroi1={selectedHeroes[0].name} 
          heroi2={selectedHeroes[1].name}
          heroi1Thumb={selectedHeroes[0].images.md}
          heroi2Thumb={selectedHeroes[1].images.md}
          powersHero1={selectedHeroes[0].powerstats}
          powersHero2={selectedHeroes[1].powerstats}
          totalPowersHero1={calculateTotalPower(selectedHeroes[0].powerstats)}
          totalPowersHero2={calculateTotalPower(selectedHeroes[1].powerstats)}
          winner={winner.name} 
          closeModal={closeModal}
        />
      )}
      {search.length > 0 ? (
        <section className="grid p-12 gap-6 content-center justify-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {filteredHeroes.map((hero) =>  (
            <CardHero 
              key={hero.id} 
              name={hero.name} 
              thumb={hero.images.lg} 
              power={hero.powerstats.combat} 
              onClick={() => handleHeroSelect(hero)}
            />
          ))}
        </section>
      ) : (
        <section className="grid p-12 gap-6 content-center justify-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {heroes.map((hero) =>  (
            <CardHero 
              key={hero.id} 
              name={hero.name} 
              thumb={hero.images.lg} 
              power={`Pontos de poder: ${calculateTotalPower(hero.powerstats)}`} 
              onClick={() => handleHeroSelect(hero)}
            />
          ))}
        </section>
      )}
    </main>
  );
}
