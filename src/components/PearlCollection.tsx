import { useGameStore } from '../store/gameStore';

export const PearlCollection = () => {
  const { pearlsRemoved } = useGameStore();
  return <div className="collection">{pearlsRemoved.map((pearl) => pearl)}</div>;
};
