/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPokemon } from './helper';

const useHome = () => {
  // const location = useLocation();
  // const navigate = useNavigate();

  const { data: pokemonData, isLoading } = useInfiniteQuery({
    queryKey: ['pokemon'],
    queryFn: () => getPokemon(10),
    getNextPageParam: (lastPage: any) =>
      lastPage.hasMore ? lastPage.nextPage : undefined,
    initialPageParam: 1,
  });

  const pokemons = pokemonData?.pages.flatMap((page: any) => page.results);

  return {
    pokemons,
    isLoading,
  };
};

export default useHome;
