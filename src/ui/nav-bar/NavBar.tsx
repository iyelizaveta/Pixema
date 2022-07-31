import { LogoButton } from "./logo-button/LogoButton";
import styles from "./NavBar.module.css";
import {
  HomeOutlined,
  FireOutlined,
  BookOutlined,
  SettingOutlined,
} from "@ant-design/icons";

type NavBarProps = {};

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className={styles.container}>
      <LogoButton></LogoButton>
      <nav className={styles.nav}>
        <a className={styles.link} href="#Home">
          <HomeOutlined />
          <p className={styles.text}>Home</p>
        </a>
        <a className={styles.link} href="#Trends">
          <FireOutlined />
          <p className={styles.text}>Trends</p>
        </a>
        <a className={styles.link} href="#Favorites">
          <BookOutlined />
          <p className={styles.text}>Favorites</p>
        </a>
        <a className={styles.link} href="#Settings">
          <SettingOutlined />
          <p className={styles.text}>Settings</p>
        </a>
      </nav>
    </div>
  );
};
