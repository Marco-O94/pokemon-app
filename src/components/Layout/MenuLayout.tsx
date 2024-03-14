/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useContext } from "react";
import PokemonContext from "../../context/pokemonContext";

const MenuLayout = () => {
  const { pokemons } = useContext(PokemonContext);
  console.log("pokemon presenti: ", pokemons);

  return <div className="md:w-3/12 hidden lg:block h-full bg-menu">test</div>;
};

export default MenuLayout;
