import FeatureContainer from "components/FeatureBox/FeatureBox";
import ContextBox from "components/ContextBox/ContextBox";
import { features } from "utils/data/featuresData";
import styles from "./Features.module.scss";
const Features = () => {
  const featureSummary = features.slice(0, 3);
  return (
    <section className={styles.featuresRoot}>
      <div className={styles.featuresHeader}>
        <ContextBox
          span="Promoting your business and services with Propel :"
          text=" A responsive, multi-page business template with everything you need
          propel your business."
        />
      </div>
      <div className={styles.featuresContainer}>
        {featureSummary.map((feature) => (
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
