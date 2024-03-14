import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PokemonProvider } from "./context/pokemonContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </React.StrictMode>
);
