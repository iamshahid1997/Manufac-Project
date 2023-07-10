export type IItemsByClass = {
  [key: number]: {
    data: number;
  }[];
};

export type IStats = {
  [key: number]: {
    mean: number;
    median: number;
    mode: number[];
  };
};

export type IGamma = {
    Alcohol: number;
    Gamma: number;
}[];
