import React from 'react';
import { jumpTo, handleClick, selectGame } from './gameSlice';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { calculateWinner } from '../helpers/helpers';
import Board from '../components/Board';

export function Game() {
  const game = useAppSelector(selectGame);
  const dispatch = useAppDispatch();

  const { history } = game;
  const current = history[game.stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step: object, move: number) => {
    const desc = move ? `Got to move #${move}` : 'Go to game start';
    
    return (
      <li key={move}>
        <button onClick={() => dispatch(jumpTo(move))}>
          <span>{desc}</span>
        </button>
      </li>
    );
  });

  let status;

  if (!winner && game.stepNumber === 9) {
    status = 'draw!';
  } else if (winner) {
    status = `winner: ${winner.player}`;
  } else {
    status = `next player: ${game.xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game-container">
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(square: number) => dispatch(handleClick(square))}
          />
        </div>
      </div>

      <div className="game-info">
        <div className="status">{status}</div>
        <ol className="moves">{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
