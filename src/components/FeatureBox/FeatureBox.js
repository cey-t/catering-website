import styles from "./FeatureBox.module.scss";
const FeatureContainer = ({ title, content, logo }) => {
  return (
    <div className={styles.featureBox}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.boxContent}>
        <h3 className={styles.boxTitle}>{title}</h3>
        <p className={styles.boxInfo}>{content}</p>
      </div>
    </div>
  );
};
export default FeatureContainer;
