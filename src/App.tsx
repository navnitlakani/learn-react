import React from "react";
import "./App.css";
import { SuperHero } from "./types";
import SuperheroList from "./pages/SuperheroList";

function App() {
  const product: SuperHero[] = [
    { id: 1, name: "Batman", description: "Batman Lorem Ipsum" },
    { id: 2, name: "Marvelman", description: "Marvelman Lorem Ipsum" },
    { id: 3, name: "Spider-Man", description: "Spider-Man Lorem Ipsum" },
    { id: 4, name: "Superman", description: "Superman Lorem Ipsum" },
  ];

  return (
    <>
      <div
        style={{
          maxWidth: "1140px",
          marginLeft: "40px",
        }}
      >
        <SuperheroList superheroInfo={product} />
      </div>
    </>
  );
}

export default App;
