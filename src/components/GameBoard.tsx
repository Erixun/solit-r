import { Pit } from './Pit';
import { useGameStore } from '../store/gameStore';
import { positions } from '../positions';
import { toKey } from '../utils/toKey';

export const GameBoard = () => {
  const { boardState } = useGameStore();

  return (
    <div className="board">
      {positions.map((position, index) => {
        const key = toKey(position);
        return (
          <div className="square">
            {boardState.has(key) ? <Pit position={position} /> : null}
          </div>
        );
      })}
    </div>
  );
};
