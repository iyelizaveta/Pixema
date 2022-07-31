import styles from "./LogoButton.module.css";
import pixema from "./pixema.png";

type LogoButtonProps = {};

export const LogoButton: React.FC<LogoButtonProps> = () => {
  return (
    <button className={styles.button}>
      <img src={pixema} alt="pixema" className={styles.logo}></img>
    </button>
  );
};
