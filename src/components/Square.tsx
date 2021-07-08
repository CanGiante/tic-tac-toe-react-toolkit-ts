import React from 'react';
import { IProps } from '../interfaces/interfaces';

export default function Square(props: IProps) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      style={{ backgroundColor: props.isWinner }}
    >
      {props.value}
    </button>
  );
}
