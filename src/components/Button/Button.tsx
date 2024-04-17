import styles from "./Button.module.scss";

interface IButton {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

export const Button = ({ text, onClick, disabled }: IButton) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
