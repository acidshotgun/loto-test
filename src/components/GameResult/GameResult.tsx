import styles from "./GameResult.module.scss";

interface IGameResult {
  isWin: boolean;
  resultComination: number[][] | null;
  generatedCombination: number[][];
}

export const GameResult = ({
  isWin,
  resultComination,
  generatedCombination,
}: IGameResult) => {
  return (
    <div className={styles.wrapper}>
      <h1>{isWin ? "Вы победили!!!" : "Вы проиграли..."}</h1>
      <div className={styles.descr}>
        <h3>Ваша комбинация:</h3>
        <div className={styles.results}>
          <p>
            <span>Поле 1:</span> {resultComination![0].join(", ")}
          </p>
          <p>
            <span>Поле 2:</span> {resultComination![1]}
          </p>
        </div>
        <h3>Победный билет:</h3>
        <div className={styles.results}>
          <p>
            <span>Поле 1:</span> {generatedCombination![0].join(", ")}
          </p>
          <p>
            <span>Поле 2:</span> {generatedCombination![1]}
          </p>
        </div>
      </div>
    </div>
  );
};
