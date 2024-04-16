import { useState, useEffect } from "react";
import { generateRandomNumbers } from "../utils/generateRandomNumbers";

export const useGeneratedGameNumbers = () => {
  const [randomNumbers1, setRandomNumbers1] = useState<number[]>([]);
  const [randomNumbers2, setRandomNumbers2] = useState<number[]>([]);

  useEffect(() => {
    setRandomNumbers1(generateRandomNumbers(8, 19));
    setRandomNumbers2(generateRandomNumbers(1, 2));
  }, []);

  return [randomNumbers1, randomNumbers2];
};
