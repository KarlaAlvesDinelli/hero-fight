import Header from './components/Header/Header';
import ListHeroes from './components/ListHeroes/ListHeroes';
import HeroesContextProvider from './contexts/HeroesContext';

export default function Home() {
  return (
    <HeroesContextProvider>
      <Header/>
      <ListHeroes/>
    </HeroesContextProvider>
  );
}
