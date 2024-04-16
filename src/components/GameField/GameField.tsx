import { useContext } from "react";
import { GameCell } from "../GameCell/GameCell";

import styles from "./GameField.module.scss";
import { GameContext } from "../../contexts/GameContext";

interface IGameField {
  fieldId: number;
  typeAction: string;
  needChoose: string;
  cellCount: number;
}

export const GameField = ({
  fieldId,
  typeAction,
  needChoose,
  cellCount,
}: IGameField) => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    return null;
  }

  const { gameNumbers } = gameContext;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>Поле {fieldId}</h3>
        <p>Отметьте {needChoose}</p>
      </div>

      <div className={styles.field}>
        {[...Array(cellCount)].map((_, i) => {
          return (
            <GameCell
              value={i + 1}
              isChoose={gameNumbers[fieldId - 1].some((num) => num === i + 1)}
              key={i}
              typeAction={typeAction}
            />
          );
        })}
      </div>
    </div>
  );
};
