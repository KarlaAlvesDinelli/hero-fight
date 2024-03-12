//Função para somar o poder maximo
export const calculateTotalPower = (hero) => {
  const totalPower = (
    hero.intelligence +
        hero.strength +
        hero.speed +
        hero.durability +
        hero.power +
        hero.combat);
        
  return totalPower;
};
