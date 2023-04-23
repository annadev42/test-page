import React, { useState } from "react";
import { Elem } from "./components/Elem";
import { heart, unicorn, pedro, galya } from "./resourses";
import { ListItem } from "./components/ListItem";

function App() {
  const [hovered, setHovered] = useState(false);
  const [activeElem, setActiveElem] = useState(false);

  const handleOnMouseOver = (index) => {
    setHovered(true);
    setActiveElem(index);
  };

  const handleOnMouseLeaave = (index) => {
    setHovered(false);
    setActiveElem(index);
  };

  const elems = [
    {
      id: 1,
      color: "#ba68c8",
      top: 0,
      left: 0,
      image: heart,
      name: "Heart",
    },
    {
      id: 2,
      color: "#f06292",
      top: 0,
      right: 0,
      image: galya,
      name: "Galya",
    },
    {
      id: 3,
      color: "#64b5f6",
      bottom: 0,
      left: 0,
      image: pedro,
      name: "Pedro",
    },
    {
      id: 4,
      color: "#ffb74d",
      bottom: 0,
      right: 0,
      image: unicorn,
      name: "Unicorn",
    },
  ];

  return (
    <div className="page-wrapper ">
      <div className="container">
        <div className="target-elems-wrapper">
          {elems &&
            elems.map((item) => {
              return (
                <Elem
                  key={item.id}
                  hovered={item.id === activeElem ? hovered : undefined}
                  color={item.color}
                  top={item.top}
                  bottom={item.bottom}
                  left={item.left}
                  right={item.right}
                  image={item.image}
                />
              );
            })}
        </div>
        <div className="list-wrapper">
          <div className="list-box">
            <h1>Hover list</h1>
            <div className="list-box-items">
              {elems &&
                elems.map((item) => (
                  <ListItem
                    key={item.id}
                    color={item.color}
                    onMouseOver={() => handleOnMouseOver(item.id)}
                    onMouseLeave={() => handleOnMouseLeaave(item.id)}
                  >
                    <span>{item.name}</span>
                  </ListItem>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
