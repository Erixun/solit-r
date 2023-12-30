type coord = -3 | -2 | -1 | 0 | 1 | 2 | 3;
export type Position = { x: coord; y: coord };

const generatePositions = () => {
  let x = -3,
    y = 3,
    positions = [];

  for (let i = 0; i < 7; i++) {
    x = -3;
    for (let j = 0; j < 7; j++) {
      positions.push({ x, y });
      x++;
    }
    y--;
  }

  return positions;
};

export const positions = generatePositions();

export const getValidPositions = (positions: Position[]) => {
  return positions.filter(isValidPosition);
};

export const validPositions = getValidPositions(positions);

export function isValidPosition({ x, y }: Position) {
  const isUpperLeft = x < -1 && y > 1;
  const isUpperRight = x > 1 && y > 1;
  const isLowerLeft = x < -1 && y < -1;
  const isLowerRight = x > 1 && y < -1;

  return !isUpperLeft && !isUpperRight && !isLowerLeft && !isLowerRight;
}
