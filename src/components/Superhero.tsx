import { useEffect, useState } from "react";
import { SuperHero } from "../types";

interface SuperheroDetail {
  superheroInfo: SuperHero;
}

function SuperheroDetails(props: SuperheroDetail) {
  const superheros = props.superheroInfo;

  const [superHero, setSuperHero] = useState([{}]);

  const deleteSuperHero = (i: number) => {
    const newItems = [...superHero];
    newItems.splice(i, 1);
    setSuperHero(newItems);
  };

  return (
    <>
      {superHero.map((item, i) => {
        return (
          <div key={i}>
            <h2>{superheros.name}</h2>
            <p>{superheros.description}</p>

            <button onClick={() => deleteSuperHero(i)}>
              Delete {superheros.name}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default SuperheroDetails;
