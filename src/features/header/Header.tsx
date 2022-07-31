import styles from "./Header.module.css";
import { SearchBar } from "./search-bar/SearchBar";
import { UserButton } from "./user-button/UserButton";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.container}>
      <SearchBar></SearchBar>
      <UserButton></UserButton>
    </div>
  );
};
