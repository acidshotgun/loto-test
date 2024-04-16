export const generateRandomNumbers = (
  count: number,
  maxNum: number
): number[] => {
  const randomNumbers: number[] = [];
  while (randomNumbers.length < count) {
    const randomNumber = Math.floor(Math.random() * maxNum) + 1;
    if (!randomNumbers.includes(randomNumber)) {
      // Проверяем, что число еще не было сгенерировано
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
};
