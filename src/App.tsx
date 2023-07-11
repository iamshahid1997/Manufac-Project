import { useEffect, useState } from "react";
import { calculateFlavanoidsStats } from "./utils/functions/calculateFlavanoidsStats";
import { IGamma, IStats } from "./utils/types";
import FlavanoidsTable from "./components/FlavanoidsTable";
import { createGamma } from "./utils/functions/createGamma";
import { calculateGamma } from "./utils/functions/calculateGammaStats";
import GammaTable from "./components/GammaTable";

function App() {
  const [flavanoidsData, setFlavanoidsData] = useState<IStats>(); // state to store stats for flavanoids
  const [createdGammaData, setCreatedGammaData] = useState<IGamma>(); // state to store newly created gamma data
  const [gammaData, setGammaData] = useState<IStats>(); // state to store stats for Gamma
  useEffect(() => {
    const wineData = calculateFlavanoidsStats();
    const createdGamma = createGamma();
    setFlavanoidsData(wineData);
    setCreatedGammaData(createdGamma)
  }, []);

  useEffect(() => {
    if (createdGammaData) {
      setGammaData(calculateGamma(createdGammaData))
    }
  }, [createdGammaData])

  return (
    <div style={{display: 'flex', gap:'10px'}}>
      {/* Table for Flavonoids Stats */}
      <FlavanoidsTable data={flavanoidsData} /> 
      {/* Table for Gamma Stats */}
      <GammaTable data={gammaData} />
    </div>
  );
}

export default App;
