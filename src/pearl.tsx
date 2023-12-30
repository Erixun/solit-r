import { useEffect, useState } from 'preact/hooks';
// import boardState from './boardState';
import { useGameStore } from './gameState';
import styles from './pearl.module.css';
import { Position } from './positions';

export const Pearl = ({ position }: { position: Position }) => {
  const { setSelectedPearl, selectedPearlPosition: selectedPearl } = useGameStore();
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

  return <div tabIndex={1} style={{border: isSelected? '1px solid' : undefined}} onClick={handleClick} className={styles.pearl} />;
};
