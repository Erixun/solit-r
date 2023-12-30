import { GameStoreState, useGameStore } from '../store/gameStore';
import { Position } from '../positions';
import { Pearl } from './Pearl';

export const Pit = ({ position }: { position: Position }) => {
  const {
    appendRemoved,
    selectedPearlPosition,
    setSelectedPearl,
    boardState,
    previousState,
    setBoardState,
    setPreviousState,
    pearlsRemoved,
  } = useGameStore();
  const keyPosition = JSON.stringify(position);

  const handleClick = () => {
    const content = boardState.get(keyPosition);
    if (content) return;
    if (!selectedPearlPosition) return;

    const { x: x0, y: y0 } = selectedPearlPosition;
    const { x: x1, y: y1 } = position;
    const movementX = x0 - x1;
    const movementY = y0 - y1;
    const distanceX = Math.abs(movementX);
    const distanceY = Math.abs(movementY);
    if (movementX && movementY) return; //move only in one direction
    if (distanceX !== 2 && distanceY !== 2) return;

    const positionInBetween = JSON.stringify({
      x: x0 - movementX / 2,
      y: y0 - movementY / 2,
    });
    const pearlInBetween = boardState.get(positionInBetween);
    if (!pearlInBetween) return;

    //TODO: method deepCopy
    const currentGameState: GameStoreState = {
      boardState: new Map([...boardState.entries()]),
      pearlsRemoved: [...pearlsRemoved],
      selectedPearlPosition: null,
      previousState,
      nextState: null,
    };
    setPreviousState(currentGameState);
    pearlInBetween.props.position = undefined
    appendRemoved(pearlInBetween);
    boardState.set(positionInBetween, null);
    boardState.set(keyPosition, <Pearl position={position} />);
    boardState.set(JSON.stringify(selectedPearlPosition), null);

    setBoardState(boardState);
    setSelectedPearl(position);
  };

  return (
    <div className="pit" tabIndex={null} onClick={handleClick}>
      {boardState.get(keyPosition)}
    </div>
  );
};
