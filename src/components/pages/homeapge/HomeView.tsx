// import { useLocation, useNavigate } from 'react-router-dom';

import Pokemon from '../../../assets/pokemon.svg';
import SearchBar from '../../container/searchBar/SearchBar';
import useHome from './useHome';

const HomeView: React.FC = () => {
  const { pokemons, isLoading } = useHome();

  return (
    <>
      {/* {Hero Section} */}
      <div
        className='bg-accent-yellow relative'
        style={{
          backgroundImage: "url('./public/bg-hero.png')",
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='flex flex-col pt-35 items-center justify-center text-center trext center gap-3.5 mx-auto px-4 max-w-[686px]'>
          <div>
            <img src={Pokemon} alt='Pokemon' />
          </div>
          <h1 className='text-display-sm text-neutral-900 md:text-display-2xl font-bold'>
            Discover the Most Powerful Pokémon in the Wild!
          </h1>
          <p className='test-sm font-medium md:text-md text-neutral-900'>
            Train, Battle, and Collect Your Favorites!
          </p>
          <SearchBar />e
        </div>
        <div className='flex items-center gap-2 bottom-0 mb-4'>
          <img src='./public/icons/cloud.png' alt='' className='z-10' />
          <img src='./public/icons/charlizard.png' alt='' className='z-1' />
          <img src='./public/icons/pikachu.png' alt='' className='z-1' />
        </div>
      </div>
      {/* Pokemon List Section */}
      <h1 className='text-display-sm text-neutral-900 md:text-display-2xl font-bold'>
        List Pokemon
      </h1>
      {!isLoading && pokemons?.map((pokemon: any) => <div>{pokemon.name}</div>)}
    </>
  );
};

export default HomeView;
