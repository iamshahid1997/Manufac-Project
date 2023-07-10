import { useEffect, useState } from "react";
import { calculateFlavanoidsStats } from "./utils/functions/calculateFlavanoidsStats";
import { IGamma, IStats } from "./utils/types";
import FlavanoidsTable from "./components/FlavanoidsTable";
import { createGamma } from "./utils/functions/createGamma";
import { calculateGamma } from "./utils/functions/calculateGammaStats";
import GammaTable from "./components/GammaTable";

function App() {
  const [flavanoidsData, setFlavanoidsData] = useState<IStats>();
  const [createdGammaData, setCreatedGammaData] = useState<IGamma>();
  const [gammaData, setGammaData] = useState<IStats>();
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

  console.log(flavanoidsData, gammaData);


  return (
    <div style={{display: 'flex', gap:'10px'}}>
      <FlavanoidsTable data={flavanoidsData} />
      <GammaTable data={gammaData} />
    </div>
  );
}

export default App;
