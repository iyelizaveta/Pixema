import styles from "./WelcomeTemplate.module.css";

type WelcomeTemplateProps = {
  children: React.ReactNode;
  className?: string;
};

export const WelcomeTemplate: React.FC<WelcomeTemplateProps> = ({
  children,
  className = "",
}) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};
