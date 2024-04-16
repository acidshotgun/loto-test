import { GameField } from "./components/GameField/GameField";
import { Button } from "./components/Button/Button";

import styles from "./App.module.scss";
import magic from "./icons/magic-wand.svg";
import { useContext } from "react";
import { GameContext } from "./contexts/GameContext";

function App() {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    return null;
  }

  const { dispatch } = gameContext;

  return (
    <div className={styles.container}>
      <main>
        <div className={styles.top}>
          <h2>Билет 1</h2>
          <button
            className={styles.button}
            onClick={() =>
              dispatch({
                type: "GENERATE_RANDOM_NUMBERS",
                payload: NaN,
              })
            }
          >
            <img src={magic} alt="magic" />
          </button>
        </div>
        <div className={styles.fields}>
          <GameField
            fieldId={1}
            typeAction={"ADD_FIRST_NUMBER"}
            needChoose={"8 чисел"}
            cellCount={19}
          />
          <GameField
            fieldId={2}
            typeAction={"ADD_SECOND_NUMBER"}
            needChoose={"1 число"}
            cellCount={2}
          />
        </div>
        <Button text="Показать результат" />
      </main>
    </div>
  );
}

export default App;
