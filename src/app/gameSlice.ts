import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { calculateWinner } from '../helpers/helpers';
import { GameState } from '../interfaces/interfaces';

const initialState: GameState = {
  history: [{ squares: Array(9).fill(null) }],
  xIsNext: true,
  stepNumber: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    jumpTo: (state, action) => {
      state.stepNumber = action.payload;
      state.xIsNext = action.payload % 2 === 0;
    },
    handleClick: (state, action) => {
      const history = state.history?.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();

      if (calculateWinner(squares) || squares[action.payload]) {
        return;
      }

      squares[action.payload] = state.xIsNext ? 'X' : 'O';

      state.history = history.concat([{ squares }]);
      state.stepNumber = history.length;
      state.xIsNext = !state.xIsNext;
    },
  },
});

export const { jumpTo, handleClick } = gameSlice.actions;

export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;
