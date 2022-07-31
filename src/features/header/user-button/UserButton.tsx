import styles from "./UserButton.module.css";

type UserButtonProps = {};

export const UserButton: React.FC<UserButtonProps> = () => {
  return (
    <button className={styles.container}>
      <div className={styles.userLogo}>AI</div>
      <p className={styles.userName}>Anton Ivanov</p>
    </button>
  );
};
