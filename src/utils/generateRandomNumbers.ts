export const generateRandomNumbers = (
  count: number,
  maxNum: number
): number[] => {
  const randomNumbers: Set<number> = new Set();

  while (randomNumbers.size < count) {
    randomNumbers.add(Math.floor(Math.random() * maxNum) + 1);
  }

  return [...randomNumbers];
};
