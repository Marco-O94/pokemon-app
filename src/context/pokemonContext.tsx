/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { PokeValues, Pokemon } from "../interfaces";

// Creazione del context con i valori iniziali
const PokemonContext = createContext<PokeValues>({
  pokemons: [],
  setPokemons: () => {},
});

function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // CHIAMATE API
  const fetchPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    const data = response.data.results;
    const pokemonData = await Promise.all(
      data.map(async (pokemon: any, index: number) => {
        const response = await axios.get(pokemon.url);
        const data = response.data;
        const types = data.types.map((type: any) => type.type.name);
        return {
          id: index + 1,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
          types,
        };
      })
    );
    setPokemons(pokemonData);
    /* setPokemons(pokemonData); */
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  // Valori che verranno passati al provider
  const pokeValues: PokeValues = {
    pokemons,
    setPokemons,
  };

  return (
    <PokemonContext.Provider value={pokeValues}>
      {children}
    </PokemonContext.Provider>
  );
}

export { PokemonProvider };
export default PokemonContext;
