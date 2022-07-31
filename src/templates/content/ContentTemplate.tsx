import { Header } from "../../features/header/Header";
import { NavBar } from "../../ui/nav-bar/NavBar";
import styles from "./ContentTemplate.module.css";

type ContentTemplateProps = {
  children: React.ReactNode;
  className?: string;
};

export const ContentTemplate: React.FC<ContentTemplateProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Header></Header>
      <NavBar></NavBar>
    </div>
  );
};
