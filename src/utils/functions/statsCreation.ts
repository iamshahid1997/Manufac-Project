import { IItemsByClass, IStats } from "../types";
import { mean, median, mode } from "./statsFunctions";

export function statsCreation(itemsByClass : IItemsByClass) {
    const stats = {} as IStats;
    for (const key in itemsByClass) {
        const meanValue = mean(itemsByClass[key]);
        const medianValue = median(itemsByClass[key]);
        const modeValues = mode(itemsByClass[key]);
        stats[key] = {
          mean: meanValue,
          median: medianValue,
          mode: modeValues,
        };
      }
      return stats;
}