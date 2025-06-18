export const getPokemon = async (name) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const resp = await fetch(url);
  const data = await resp.json();
  // console.log(data);

  const infoPokemon = [
    {
      id: data.id,
      name: data.name,
      type: data.types,
      sprite: data.sprites.front_default,
      stats: data.stats,
    },
  ];

  console.log(infoPokemon);
  return infoPokemon;
};
