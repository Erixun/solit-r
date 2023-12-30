import { useGameStore } from '../gameStore';

export const PearlCollection = () => {
  const { pearlsRemoved } = useGameStore();
  return <div className="removals">{pearlsRemoved.map((pearl) => pearl)}</div>;
};
