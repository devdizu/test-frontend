export interface Price {
  currency: String;
  amount: number;
  decimals: number;
}

export enum ECondition {
  new = "Nuevo",
  used = "usado",
}
