import styles from "./Features.module.scss";
import { features } from "utils/data/featuresData";
import FeatureContainer from "components/FeatureBox/FeatureBox";
const Features = () => {
  return (
    <section className={styles.featuresRoot}>
      <div className={styles.featuresHeader}>
        <h2 className={styles.featureTitle}>
          <span className={styles.featureHighlight}>
            Promoting your business and services with Propel :
          </span>
          A responsive, multi-page business template with everything you need
          propel your business.
        </h2>
      </div>
      <div className={styles.featuresContainer}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.feature}>
            <FeatureContainer
              title={feature.title}
              content={feature.content}
              logo={feature.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Features;
