import WINE_DATA from "../Wine-Data.json";
import { IFlavanoids, IItemsByClass } from "../types";
import { statsCreation } from "./statsCreation";

export function calculateFlavanoidsStats() {
  const itemsByClass = {} as IItemsByClass;

  // sperating wine data based on different Alcohol classes
  WINE_DATA.forEach((data: IFlavanoids) => {
    const key = data.Alcohol;
    if (!(key in itemsByClass)) itemsByClass[key] = [];
    itemsByClass[key].push({
      data: data.Flavanoids,
    });
  });
  // getting stats data from statsCreation function
  const stats = statsCreation(itemsByClass);
  return stats;
}
