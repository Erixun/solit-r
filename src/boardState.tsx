import { JSX } from 'preact/jsx-runtime';
import { Pearl } from './pearl';
import { Position, validPositions } from './positions';

export const getDefaultBoardState = () => {
  const boardState = new Map<string, JSX.Element | null>();

  validPositions.forEach((position) => {
    const isOrigo = position.x === 0 && position.y === 0;
    const keyPosition = JSON.stringify(position);
    boardState.set(keyPosition, isOrigo ? null : <Pearl position={position} />);
  });

  return boardState;
};

