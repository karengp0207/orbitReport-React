import React from "react";
import satData from "./satData";

const Buttons = ({filterByType, setSat, displaySats}) => {
  return (
    <div>
      {displaySats.map((sat, id) => {  {/* props filterByType, setSat, displaySats from the Apps function*/}
        return (
        <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
        );
      })};
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;