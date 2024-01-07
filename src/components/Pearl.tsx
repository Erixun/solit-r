import { useEffect, useState } from 'preact/hooks';
import { useGameStore } from '../store/gameStore';
import { Position } from '../utils/positions';
import styles from './Pearl.module.css';

export const Pearl = ({ position }: { position?: Position }) => {
  const { setSelectedPearl, selectedPearlPosition: selectedPearl } =
    useGameStore();
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setSelectedPearl(position);
    console.log('clicked', position);
  };

  useEffect(() => {
    if (selectedPearl && selectedPearl === position) {
      setIsSelected(true);
      console.log('selected', position);
    } else {
      setIsSelected(false);
    }
  }, [selectedPearl]);

  return (
    <div
      tabIndex={1}
      data-selected={isSelected}
      onClick={handleClick}
      className={styles.pearl}
    />
  );
};
