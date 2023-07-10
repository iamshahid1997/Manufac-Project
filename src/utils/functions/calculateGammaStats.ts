import { IGamma, IItemsByClass } from "../types";
import { statsCreation } from "./statsCreation";

export function calculateGamma(data: IGamma) {
  const itemsByClass = {} as IItemsByClass;

  // sperating wine data based on different Alcohol classes
  Object.values(data).forEach((data) => {
    const key = data.Alcohol;
    if (!(key in itemsByClass)) itemsByClass[key] = [];
    itemsByClass[key].push({
      data: data.Gamma,
    });
  });
  // getting stats data from statsCreation function
  const stats = statsCreation(itemsByClass);
  return stats;
}
