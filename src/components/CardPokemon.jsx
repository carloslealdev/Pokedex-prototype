import { useFecthPokemon } from "../hooks/useFecthPokemon";

export const CardPokemon = ({ pokemon }) => {
  const { pokemons } = useFecthPokemon(pokemon);

  // const colorType = {
  //   fire: "fireColor",
  //   flying: "flyingColor"
  // }

  return (
    <>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} className="pk-container">
          <header className="pk-container-header">
            <img src={pokemon.sprite} alt="" />

            <h1>{pokemon.name.toUpperCase()}</h1>
          </header>

          <section className="pk-container-types">
            <h2>Types</h2>
            <div className="pk-container-types-grid">
              {pokemon.type.map((typeObj) => (
                <p className={typeObj.type.name} key={typeObj.type.name}>
                  {typeObj.type.name.toUpperCase()}
                </p>
              ))}
            </div>
          </section>

          <section className="pk-container-stats">
            <h2>Stats</h2>
            <div className="pk-container-stats-grid">
              {pokemon.stats.map((statObj) => (
                <p key={statObj.stat.name}>
                  {statObj.stat.name.toUpperCase()} {statObj.base_stat}
                </p>
              ))}
            </div>
          </section>
        </div>
      ))}
    </>
  );
};
