import { JSX } from 'preact/jsx-runtime';
import { Pearl } from '../components/Pearl';
import { validPositions } from '../positions';

export const getInitialBoardState = () => {
  const boardState = new Map<string, JSX.Element | null>();

  validPositions.forEach((position) => {
    const isOrigo = position.x === 0 && position.y === 0;
    const keyPosition = JSON.stringify(position);
    boardState.set(keyPosition, isOrigo ? null : <Pearl position={position} />);
  });

  return boardState;
};

export const initialBoardState = getInitialBoardState();

export const toBoardState = (entries: [string, JSX.Element | null][]) => {
  const boardState = new Map<string, JSX.Element | null>();

  entries.forEach(([key, value]) => {
    boardState.set(key, value);
  });

  return boardState;
};

export const toEntries = (boardState: Map<string, JSX.Element | null>) => {
  return [...boardState.entries()];
};

export const initialGameState = toEntries(initialBoardState);
