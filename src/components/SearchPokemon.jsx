import { useState } from "react";
import { getPokemon } from "../helper/getPokemon";

export const SearchPokemon = ({ onNewPokemon }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChage = (event) => {
    setInputValue(event.target.value);
    // console.log(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    onNewPokemon(inputValue);
    setInputValue("");
  };
  return (
    <form
      onSubmit={(event) => {
        onSubmit(event);
      }}
    >
      <input
        autoFocus
        type="text"
        placeholder="Search Pokémons"
        value={inputValue}
        onChange={(event) => {
          onInputChage(event);
        }}
      />
    </form>
  );
};
