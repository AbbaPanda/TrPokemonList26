import { api } from '../api';
import { pokemonService } from './endpoint';

const getPokemonList = async (limit: number = 10) => {
  const response = await api.get(pokemonService.getPokemon(limit));
  return response.data;
};

const pokemonServices = {
  getPokemonList,}

export default pokemonServices;
