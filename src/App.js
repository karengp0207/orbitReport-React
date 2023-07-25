import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import { useState } from 'react';
import satData from "./components/satData";

function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))]; {/*Set is a method*/}
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);            {/*updates setSat by passing it the updated displaySats}*/}
  };
  return (
    <div>
      <>
        <Banner />
        <Buttons 
          filterByType={filterByType}
          setSat={setSat}
          displaySats={displaySats}
        />
      <Table sat={sat}/>
      </>
    </div>
  );
}

export default App;
