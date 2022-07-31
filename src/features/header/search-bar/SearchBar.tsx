import styles from "./SearchBar.module.css";
import { MenuOutlined } from "@ant-design/icons";

type SearchBarProps = {};

export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Search"></input>
      <MenuOutlined />
    </div>
  );
};
