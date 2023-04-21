import React, { useState } from "react";
import { Elem1, Elem2, Elem3, Elem4 } from "./resourses/components/";

function App() {
  const [hoveredHeart, setHoveredHeart] = useState(false);
  const [hoveredGalya, setHoveredGalya] = useState(false);
  const [hoveredPedro, setHoveredPedro] = useState(false);
  const [hoveredUnicorn, setHoveredUnicorn] = useState(false);

  return (
    <div className="page-wrapper ">
      <div className="container">
        <div className="target-elems-wrapper">
          <Elem1 hovered={hoveredHeart} bg="#ff1744" />
          <Elem2 hovered={hoveredGalya} />
          <Elem3 hovered={hoveredPedro} />
          <Elem4 hovered={hoveredUnicorn} />
        </div>
        <div className="list-wrapper">
          <div className="list-box">
            <h1>Hover list</h1>
            <ul>
              <li
                onMouseOver={() => setHoveredHeart(true)}
                onMouseLeave={() => setHoveredHeart(false)}
              >
                <a href="#">Heart</a>
              </li>
              <li
                onMouseOver={() => setHoveredGalya(true)}
                onMouseLeave={() => setHoveredGalya(false)}
              >
                <a href="#">Galya</a>
              </li>
              <li
                onMouseOver={() => setHoveredPedro(true)}
                onMouseLeave={() => setHoveredPedro(false)}
              >
                <a href="#">Pedro</a>
              </li>
              <li
                onMouseOver={() => setHoveredUnicorn(true)}
                onMouseLeave={() => setHoveredUnicorn(false)}
              >
                <a href="#">Unicorn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
