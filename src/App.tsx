import { useState } from "react";
import { useGameContext } from "./hooks/useGameContext";
import { compareGameResults } from "./utils/compareGameResults";
import { GameField } from "./components/GameField/GameField";
import { Button } from "./components/Button/Button";
import { GameResult } from "./components/GameResult/GameResult";

import styles from "./App.module.scss";
import magic from "./icons/magic-wand.svg";

function App() {
  const gameContext = useGameContext();
  const { gameNumbers, generatedNumbers, dispatch, gameStatus, setGameStatus } =
    gameContext;
  const [resultComination, setResultCombination] = useState<number[][] | null>(
    null
  );
  const { isEnd, isWin } = gameStatus;

  const toFinishGame = () => {
    const { result, combination } = compareGameResults(
      gameNumbers,
      generatedNumbers
    );

    setResultCombination(() => combination);

    setGameStatus(() => {
      return {
        isEnd: true,
        isWin: result,
      };
    });
  };

  const startNewGame = () => {
    setGameStatus(() => {
      return {
        isEnd: false,
        isWin: false,
      };
    });

    dispatch({
      type: "START_NEW_GAME",
      payload: NaN,
    });

    setResultCombination(null);
  };

  return (
    <div className={styles.container}>
      <main>
        <div className={styles.top}>
          <h2>Билет 1</h2>
          {!isEnd && (
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
          )}
        </div>
        {isEnd === false ? (
          <>
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
          </>
        ) : (
          <GameResult
            isWin={isWin}
            resultComination={resultComination}
            generatedCombination={generatedNumbers}
          />
        )}
        <Button
          text={isEnd ? "Новая игра" : "Показать результат"}
          onClick={isEnd ? startNewGame : toFinishGame}
          disabled={
            !(gameNumbers[0].length === 8 && gameNumbers[1].length === 1)
          }
        />
      </main>
    </div>
  );
}

export default App;
