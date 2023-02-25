import styles from "./FeatureBox.module.scss";
import classNames from "classnames";
const FeatureContainer = ({ title, content, logo, className = null }) => {
  return (
    <div className={classNames(styles.featureBox, className)}>
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
