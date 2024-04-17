import { GameContext } from "../contexts/GameContext";
import { useContext } from "react";

export const useGameContext = () => {
  const gameContext = useContext(GameContext);

  if (gameContext === null) {
    throw new Error("error");
  }

  return gameContext;
};
