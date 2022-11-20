import { SuperHero } from "../types";
import SuperheroDetails from "../components/Superhero";
import { useEffect, useRef, useState } from "react";

interface SuperheroProps {
  superheroInfo: SuperHero[];
}

function ProductList(productpageProps: SuperheroProps) {
  const products = productpageProps.superheroInfo;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [length, setLength] = useState("");

  const renderCount = useRef(200);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    renderCount.current = renderCount.current - 1;
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <h1>All SuperHero</h1>

      {products.map((superheroDetails: SuperHero) => {
        return (
          <div key={superheroDetails.id}>
            <SuperheroDetails superheroInfo={superheroDetails} />
          </div>
        );
      })}

      <h1>Window width {windowWidth}</h1>

      <i className="fa fa-line-chart" aria-hidden="true"></i>

      <textarea
        maxLength={200}
        value={length}
        onChange={(l) => setLength(l.target.value)}
        style={{
          height: "100px",
          width: "400px",
        }}
      ></textarea>
      <h4> {renderCount.current} Words remaining</h4>
    </>
  );
}

export default ProductList;
