interface IResult {
  result: boolean;
  combination: number[][];
}

export const compareGameResults = (
  gameNumbers: number[][],
  generatedNumbers: number[][]
): IResult => {
  const result: number[][] = [[], []];

  for (let i = 0; i < generatedNumbers.length; i++) {
    for (let k = 0; k < generatedNumbers[i].length; k++) {
      if (generatedNumbers[i].includes(gameNumbers[i][k])) {
        result[i].push(gameNumbers[i][k]);
      }
    }
  }

  return {
    result:
      result[0].length >= 4 || (result[0].length >= 3 && result[1].length >= 1),
    combination: result,
  };
};
