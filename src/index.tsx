import { render } from 'preact';
import { positions } from './positions';
import { Pit } from './Pit';
import { useGameStore } from './gameState';
import { toKey } from './utils/toKey';
import './style.css';

export function App() {
  const { boardState, pearlsRemoved, resetBoardState } = useGameStore();

  const handleKeyPress = (ev: KeyboardEvent) => {
    //TODO: implement keyboard navigation
    console.log(ev);
  };

  //TODO: check if game over...
  return (
    <>
      <div className="board" onKeyPress={handleKeyPress}>
        {positions.map((position, index) => {
          const key = toKey(position);
          return (
            <div className="square">
              {boardState.has(key) ? <Pit position={position} /> : null}
            </div>
          );
        })}
      </div>
      <div className="removals">{pearlsRemoved.map((pearl) => pearl)}</div>
      <div className="btn-group" style={{ display: 'flex', gap: 5 }}>
        <button
          onClick={resetBoardState}
          style={{ fontSize: "1rem", height: 46, width: 100, flex: 1 }}
        >
          Start Over
        </button>
        {/* TODO: implement Undo */}
        <button style={{ fontSize: "1rem", height: 46, width: 100, flex: 1 }}>Undo</button>
      </div>
    </>
  );
}

render(<App />, document.getElementById('app'));
