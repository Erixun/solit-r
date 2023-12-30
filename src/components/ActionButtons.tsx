import { useGameStore } from '../gameStore';
import { Button } from './Button';

export const ActionButtons = () => {
  const {
    previousState,
    nextState,
    setToPreviousState: undo,
    setToNextState: redo,
    reset,
  } = useGameStore();
  return (
    <div className="btn-group" style={{ display: 'flex', gap: 5 }}>
      <Button disabled={!previousState} label="Undo" onClick={undo} />
      <Button disabled={!nextState} label="Redo" onClick={redo} />
      <Button disabled={false} label="Reset" onClick={reset} />
    </div>
  );
};
