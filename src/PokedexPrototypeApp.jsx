import { CardPokemon } from "./components/CardPokemon";
import { SearchPokemon } from "./components/SearchPokemon";
import { useState } from "react";
import LogoSVG from "./assets/pokemon-23.svg";
import "./App.css";

export const PokedexPrototypeApp = () => {
  const [pokemons, setPokemon] = useState([]);

  const onShowPokemon = (newPokemon) => {
    // setPokemon([newPokemon, ...pokemons]); habilitar esta opcion si se desea que
    // se mantenga el historial de busqueda
    setPokemon([newPokemon]);
  };

  return (
    <>
      <div className="pk-app">
        <header className="pk-header">
          {/*titulo */}
          <img src={LogoSVG} alt="Logo Pokémon" width={200} />

          {/* <h1>Pokédex Prototype App</h1> */}

          {/*Input para buscar pokémon por nombre */}
          <SearchPokemon onNewPokemon={onShowPokemon} />
        </header>

        <main className="pk-main">
          {/*Card con la descripcion del pokémon */}
          {pokemons.map((pokemon) => {
            return <CardPokemon key={pokemon} pokemon={pokemon} />;
          })}
        </main>
      </div>
      {/* <CardPokemon /> */}
    </>
  );
};
