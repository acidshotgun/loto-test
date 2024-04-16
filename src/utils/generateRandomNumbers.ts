export const generateRandomNumbers = (
  count: number,
  maxNum: number
): number[] => {
  const randomNumbers: number[] = [];
  while (randomNumbers.length < count) {
    const randomNumber = Math.floor(Math.random() * maxNum) + 1;
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
};
