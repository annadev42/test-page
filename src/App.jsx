import React, { useState } from "react";
import { Elem } from "./components/Elem";
import { heart, blood, brains, liver, body } from "./resourses";
import { ListItem } from "./components/ListItem";

function App() {
  const [hovered, setHovered] = useState(false);
  const [activeElem, setActiveElem] = useState(false);

  const handleMouseOver = (index) => {
    setHovered(true);
    setActiveElem(index);
  };

  const handleMouseLeaave = (index) => {
    setHovered(false);
    setActiveElem(index);
  };

  const elems = [
    {
      id: 1,
      color: "#ba68c8",
      top: 26,
      left: 53,
      image: heart,
      name: "Heart",
    },
    {
      id: 2,
      color: "#f06292",
      top: 5,
      left: 46,
      image: brains,
      name: "Brains",
    },
    {
      id: 3,
      color: "#64b5f6",
      right: 10,
      top: 52,
      image: blood,
      name: "Blood-vessel",
    },
    {
      id: 4,
      color: "#aed581",
      top: 42,
      left: 35,
      image: liver,
      name: "Liver",
    },
  ];

  return (
    <div className="page-wrapper ">
      <div className="container">
        <div className="left">
          <div className="image-wrapper">
            <img src={body} alt="Human body" />

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
          </div>
        </div>

        <div className="right">
          <div className="list-wrapper">
            <div className="list-box">
              <div className="list-box-items">
                {elems &&
                  elems.map((item) => (
                    <ListItem
                      key={item.id}
                      color={item.color}
                      onMouseOver={() => handleMouseOver(item.id)}
                      onMouseLeave={() => handleMouseLeaave(item.id)}
                    >
                      <span>{item.name}</span>
                    </ListItem>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
