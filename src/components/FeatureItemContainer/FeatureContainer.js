import styles from "./FeatureContainer.module.scss";
import { features } from "./features";
const FeatureContainer = (name, title, content) => {
  return (
    <div className={styles.featureContainer}>
      {features.map((feature) => (
        <div className={styles.featureItem}>
          <div className={styles.logoContainer}>
            <img src={feature.logo} alt="logo" />
          </div>
          <div className={styles.featureDetails}>
            <h3 className={styles.featureItemTitle}>{feature.title}</h3>
            <p className={styles.featureItemContent}>{feature.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FeatureContainer;
