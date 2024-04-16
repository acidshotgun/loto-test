import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

import styles from "./GameCell.module.scss";

interface IGameCell {
  value: number;
  isChoose: boolean;
  typeAction: string;
}

export const GameCell = ({ value, typeAction, isChoose }: IGameCell) => {
  const { dispatch } = useContext(GameContext);

  return (
    <button
      className={`${styles.cell} ${isChoose ? styles.choosed_cell : null}`}
      onClick={() =>
        dispatch({
          type: typeAction,
          payload: value,
        })
      }
    >
      {value}
    </button>
  );
};
