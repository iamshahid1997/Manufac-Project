import WINE_DATA from "../Wine-Data.json";
import { IGamma } from "../types";

export function createGamma() {
  const gammaData = {} as IGamma;
  WINE_DATA.forEach(
    (data: {
      Alcohol: number
      Ash: number;
      Hue: number;
      Magnesium: number;
      Gamma?: number
    }, index) => {
      const gamma = (data.Ash * data.Hue) / data.Magnesium;
      gammaData[index] = {
        Alcohol: data.Alcohol,
        Gamma: parseFloat(gamma.toFixed(2))
      }
    }
  );
  return gammaData;
}
