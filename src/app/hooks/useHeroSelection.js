import { useContext } from 'react';
import { HeroesContext } from '@/app/contexts/HeroesContext';
import { calculateTotalPower } from '@/app/utils/calculateTotalPower'; 

const useHeroSelection = () => {

  const {
    selectedHeroes,
    setSelectedHeroes,
    setWinner,
    setIsModalOpen,
  } = useContext(HeroesContext);

  const handleHeroSelect = (hero) => {
    if (selectedHeroes.length < 2) {
      setSelectedHeroes([...selectedHeroes, hero]);
      if (selectedHeroes.length === 1) {
        const hero1 = selectedHeroes[0];
        const hero2 = hero;
        const totalPowerHero1 = calculateTotalPower(hero1.powerstats); 
        const totalPowerHero2 = calculateTotalPower(hero2.powerstats); 
        let winner = null; 
        if (totalPowerHero1 > totalPowerHero2) {
          winner = hero1;
        } else if (totalPowerHero2 > totalPowerHero1) {
          winner = hero2;
        } 
        setWinner(winner);
        setIsModalOpen(true);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setWinner(null);
    setSelectedHeroes([]);
  };

  return { handleHeroSelect, closeModal };
};

export default useHeroSelection;
