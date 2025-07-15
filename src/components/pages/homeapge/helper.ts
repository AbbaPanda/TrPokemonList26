import pokemonService from '../../../components/services/pokemon/service';

const getPokemon = async (limit: number = 10) => {
  try {
    return pokemonService.getPokemonList(limit);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch Pokemon list');
  }
};

export { getPokemon };
