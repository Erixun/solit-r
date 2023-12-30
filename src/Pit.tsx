import { useGameStore } from './gameState';
import { Position } from './positions';
import { Pearl } from './pearl';

export const Pit = ({ position }: { position: Position }) => {
  const { appendRemoved, selectedPearlPosition, setSelectedPearl, boardState, setBoardState } =
    useGameStore();
  const keyPosition = JSON.stringify(position);

  const handleClick = () => {
    console.log('click pit')
    const content = boardState.get(keyPosition);
    if (content) return;
    if (!selectedPearlPosition) return;

    const { x: x0, y: y0 } = selectedPearlPosition;
    const { x: x1, y: y1 } = position;
    const movementX = x0 - x1;
    const movementY = y0 - y1;
    const distanceX = Math.abs(movementX);
    const distanceY = Math.abs(movementY);
    //if distance is not 2, then it's not a valid move
    if (movementX && movementY) return; //move only in one direction
    if (distanceX !== 2 && distanceY !== 2) return;
    // if (distance !== 2) return;
    //if there is no pearl in between, then it's not a valid move
    const inBetweenPosition = JSON.stringify({
      x: x0 - movementX / 2,
      y: y0 - movementY / 2,
    });
    const inBetweenPearl = boardState.get(inBetweenPosition);
    console.log('inBetween', inBetweenPearl);
    if (!inBetweenPearl) return;
    //TODO: remove pearl in between
    console.log('remove pearl at ', inBetweenPosition)
    appendRemoved(inBetweenPearl)
    boardState.set(inBetweenPosition, null);

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
