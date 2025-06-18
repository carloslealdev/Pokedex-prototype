import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PokedexPrototypeApp } from "./PokedexPrototypeApp";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PokedexPrototypeApp />
  </StrictMode>
);
