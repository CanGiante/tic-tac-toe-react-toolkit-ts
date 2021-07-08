import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { IProps } from '../interfaces/interfaces';
import { calculateWinner } from '../helpers/helpers';
import Square from './Square';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export function Board(props: IProps) {
  const winner = calculateWinner(props.squares);
  const winnerSquares = winner?.line;
  const renderSquare = (i: number) => (
    <Square
      value={props.squares[i]}
      onClick={() => props.onClick(i)}
      key={i}
      isWinner={winnerSquares?.includes(i) ? theme.palette.primary.light : ''}
    />
  );

  const row1 = [];
  const row2 = [];
  const row3 = [];

  for (let i = 0; i < 3; i++) {
    row1.push(renderSquare(i));
    row2.push(renderSquare(i + 3));
    row3.push(renderSquare(i + 6));
  }

  return (
    <div className="board">
      <div className="board-row">{row1}</div>
      <div className="board-row">{row2}</div>
      <div className="board-row">{row3}</div>
    </div>
  );
}

export default Board;
