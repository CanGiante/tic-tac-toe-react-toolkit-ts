export interface IProps {
  onClick?: any;
  value?: number;
  squares?: Array<string> | any;
  isWinner?: string;
}

export interface GameState {
  history: Array<any>;
  xIsNext: boolean;
  stepNumber: number;
}

export interface ISign {
  x?: string;
  o?: string;
}
