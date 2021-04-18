export interface Price {
  currency: String;
  amount: number;
  decimals: number;
}

export enum ECondition {
  new = "Nuevo",
  used = "usado",
}

export const API_URL = "http://localhost:3000/api";
