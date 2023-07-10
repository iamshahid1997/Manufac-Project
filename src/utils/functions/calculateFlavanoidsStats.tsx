import WINE_DATA from "../Wine-Data.json";
import { IItemsByClass } from "../types";
import { statsCreation } from "./statsCreation";

export function calculateFlavanoidsStats() {
  const itemsByClass = {} as IItemsByClass;

  WINE_DATA.forEach((data: { Alcohol: number; Flavanoids: number }) => {
    const key = data.Alcohol;
    if (!(key in itemsByClass)) itemsByClass[key] = [];
    itemsByClass[key].push({
      data: data.Flavanoids,
    });
  });
  console.log(itemsByClass)
  const stats = statsCreation(itemsByClass);
  return stats;
}
