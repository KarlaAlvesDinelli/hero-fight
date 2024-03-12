import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { HeroesContext } from '@/app/contexts/HeroesContext';
import Loading from '../Loading';

export default function CardHero({ thumb, name, power, onClick }) {
  const { loading, selectedHeroes } = React.useContext(HeroesContext);
  const isSelected = selectedHeroes.some(hero => hero.name === name);

  return (
    <Card
      sx={{
        maxWidth: 250,
        border: isSelected ? '6px solid indigo' : 'none', 
        boxShadow: isSelected ? '0px 0px 8px 6px indigo' : 'none',
        backgroundColor: isSelected ? 'rgba(148, 0, 211, 0.5)' : 'white', 
        color: isSelected ? 'white' : 'initial', 
      }}
      onClick={onClick}
    >
      <CardActionArea>
        {loading ? (
          <Loading />
        ) : (
          <CardMedia component="img" height="30" image={thumb} alt="hero photo" />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            {power}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
