import React, { useState } from "react";
import styled from "styled-components";

const TargetDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 30px;
  height: 20px;
  border: 1px solid red;
  background: url("/public/images/heart_3.png") center no-repeat;
  background-size: contain;
  transition: 300ms ease-in-out;
`;

const Test = styled.div`
  width: 30px;
  height: 39px;
  background-color: red;
`;

function App() {
  const [hovered, setHovered] = useState();

  return (
    <div className="page-wrapper ">
      <div className="container">
        <div className="list-wrapper">
          <p>Hover list item</p>
          <ul>
            <li>
              <a href="#">Element 1</a>
            </li>
            <li>
              <a href="#">Element 2</a>
            </li>
            <li>
              <a href="#">Element 3</a>
            </li>
            <li>
              <a href="#">Element 4</a>
            </li>
            <li>
              <a href="#">Element 5</a>
            </li>
          </ul>
        </div>
        {/* <div className={`${"absolute - container"} ${"redBg"}`}></div> */}
        <TargetDiv />
      </div>
    </div>
  );
}

export default App;
