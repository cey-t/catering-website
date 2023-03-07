import styles from "./HeaderContextBox.module.scss";
const HeaderContextBox = ({ name, header, content, hasBorder }) => {
  return (
    <div className={styles.innerHeaderBoxContainer}>
      <div className={styles.headerBox}>
        <div className={styles.pageNameContainer}>
          <h3 className={styles.pageName}>{name}</h3>
          {hasBorder && <div className={styles.border}></div>}
        </div>
        <h1 className={styles.header}>{header}</h1>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};
export default HeaderContextBox;
