import styles from "./Features.module.scss";
import { features } from "utils/data/featuresData";
import ContextBox from "components/ContextBox/ContextBox";
import FeatureContainer from "components/FeatureBox/FeatureBox";
const Features = () => {
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
