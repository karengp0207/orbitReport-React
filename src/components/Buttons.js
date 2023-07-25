import React from "react";
import satData from "./satData";

const Buttons = ({filterByType, setSat, displaySats}) => {
  {/*const filterByType = props.filterByType;*/}
  {/*const setSat = props.setSat;*/}
  {/*const displaySats = props.displaySats;*/}
  {/*const satData = displaySats.map((satellite) => satellite.sat);*/}
  {/*const handleSetSat = () => {
  setSat(satData);*/}
  
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