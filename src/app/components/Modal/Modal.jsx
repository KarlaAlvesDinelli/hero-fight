/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { calculateTotalPower } from '@/app/utils/calculateTotalPower';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '20px', 
  boxShadow: 24,
  p: 4,
};

export default function ModalBattle(
  {closeModal,
    heroi1,
    heroi2,
    winner,
    heroi1Thumb,
    heroi2Thumb,
    powersHero1,
    powersHero2,
    totalPowersHero1,
    totalPowersHero2
  }) {
    
  return (
    <div>
      <Modal
        open={open}
        onClose={closeModal}
      >
        <Box sx={style} className="w-2/5 h-2/4 ">
          <h2 className="text-center font-bold text-xl">Resultados da Batalha</h2>
          <h3 className="text-center text-lg font-bold text-green-500 flex justify-center mt-2"> Vencedor: 
            <p className="text-gray-800 ml-5"> {winner}</p>
          </h3>
          <div className="flex justify-between text-gray-600 h-3/5">
            <div className="grid grid-cols-2">
              <section className="grid grid-cols-1 justify-items-start">
                <img src={heroi1Thumb} alt="Hero photo"/>
                <Typography className="text-lg font-bold  flex justify-center mt-2">
                  {heroi1}
                </Typography>
              </section>
              <ul className="text-center mt-4">
                <li>{powersHero1.intelligence}</li>
                <li>{powersHero1.strength}</li>
                <li>{powersHero1.speed}</li>
                <li>{powersHero1.durability}</li>
                <li>{powersHero1.power}</li>
                <li>{powersHero1.combat}</li>
                <li className="mt-7 text-red-500 font-bold">{totalPowersHero1}</li>
              </ul>
            </div>
            <ul className="text-center mt-4">
              <li>Intelligência</li>
              <li>Força</li>
              <li>Velocidade</li>
              <li>Durabilidade</li>
              <li>Poder</li>
              <li>Combate</li>
              <li className="mt-7">Total</li>
            </ul>
            <div className="grid grid-cols-2">
              <ul className="text-center mt-4">
                <li>{powersHero2.intelligence}</li>
                <li>{powersHero2.strength}</li>
                <li>{powersHero2.speed}</li>
                <li>{powersHero2.durability}</li>
                <li>{powersHero2.power}</li>
                <li>{powersHero2.combat}</li>
                <li className="mt-7 text-red-500 font-bold">{totalPowersHero2}</li>
              </ul>
              <section className="grid grid-cols-1 justify-items-end">
                <img src={heroi2Thumb} alt="Hero photo"/>
                <Typography className="text-lg font-bold  flex justify-center mt-2">  
                  {heroi2}
                </Typography>
              </section>
            </div>
          </div>
          <section className="flex justify-center">
            <Button color="error" className="mt-11 font-bold text-lg "  onClick={closeModal}>Fechar</Button>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
