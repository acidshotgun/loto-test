import {
  createContext,
  Dispatch,
  ReactNode,
  useReducer,
  useState,
} from "react";
import { useGeneratedGameNumbers } from "../hooks/useGeneratedGameNumbers";
import { generateRandomNumbers } from "../utils/generateRandomNumbers";

interface IGameProvider {
  children: ReactNode;
}

interface IGameContext {
  generatedNumbers: number[][];
  gameNumbers: number[][];
  dispatch: Dispatch<{ type: string; payload: number }>;
  gameStatus: {
    isEnd: boolean;
    isWin: boolean;
  };
  setGameStatus: Dispatch<
    React.SetStateAction<{
      isEnd: boolean;
      isWin: boolean;
    }>
  >;
}

export const GameContext = createContext<IGameContext | null>(null);

const initialState: number[][] = [[], []];

export const GameProvider = ({ children }: IGameProvider) => {
  const generatedNumbers = useGeneratedGameNumbers();
  const [gameNumbers, dispatch] = useReducer(gameReducer, initialState);
  const [gameStatus, setGameStatus] = useState({
    isEnd: false,
    isWin: false,
  });

  return (
    <GameContext.Provider
      value={{
        generatedNumbers,
        gameNumbers,
        dispatch,
        gameStatus,
        setGameStatus,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const gameReducer = (
  gameNumbers: number[][],
  action: { type: string; payload: number }
): number[][] => {
  switch (action.type) {
    case "ADD_FIRST_NUMBER": {
      if (gameNumbers[0].includes(action.payload)) {
        const updatedFirstArray = gameNumbers[0].filter(
          (num) => num !== action.payload
        );
        return [updatedFirstArray, gameNumbers[1]];
      } else if (gameNumbers[0].length < 8) {
        const updatedFirstArray = [...gameNumbers[0], action.payload];
        return [updatedFirstArray, gameNumbers[1]];
      }
      break;
    }
    case "ADD_SECOND_NUMBER": {
      if (gameNumbers[1].includes(action.payload)) {
        const updatedSecondArray = gameNumbers[1].filter(
          (num) => num !== action.payload
        );
        return [gameNumbers[0], updatedSecondArray];
      } else if (gameNumbers[1].length < 1) {
        const updatedSecondArray = [...gameNumbers[1], action.payload];
        return [gameNumbers[0], updatedSecondArray];
      }
      break;
    }
    case "GENERATE_RANDOM_NUMBERS": {
      return [generateRandomNumbers(8, 19), generateRandomNumbers(1, 2)];
    }
    case "START_NEW_GAME": {
      return [[], []];
    }
  }
  return gameNumbers;
};
