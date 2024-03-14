export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export type PokeValues = {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};
