import * as styles from "./loader.css";
export const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      Loading
    </div>
  );
};
