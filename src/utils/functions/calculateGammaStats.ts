import { IGamma, IItemsByClass } from "../types";
import { statsCreation } from "./statsCreation";

export function calculateGamma(data: IGamma) {
  const itemsByClass = {} as IItemsByClass;

  Object.values(data).forEach((data) => {
    const key = data.Alcohol;
    if (!(key in itemsByClass)) itemsByClass[key] = [];
    itemsByClass[key].push({
      data: data.Gamma,
    });
  });

  const stats = statsCreation(itemsByClass);
  return stats;
}
