import { useEffect, useState } from "react";
import { getPokemon } from "../helper/getPokemon";

export const useFecthPokemon = (pokemon) => {
  const [pokemons, setPokemons] = useState([]);

  const getInfo = async () => {
    const newPokemon = await getPokemon(pokemon);
    setPokemons(newPokemon);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return {
    pokemons,
  };
};
