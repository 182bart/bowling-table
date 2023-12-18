export interface Player {
  name: string;
  score: Array<Round>;
  total: number;
}
export interface Round {
  firstThrow: number;
  secondThrow: number;
  roundTotal: number;
}
