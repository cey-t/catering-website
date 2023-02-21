import FeatureContainer from "components/FeatureBox/FeatureBox";
import { features } from "utils/data/featuresData";
import ContextBox from "components/ContextBox/ContextBox";
import styles from "./FeatureCollection.module.scss";
const FeatureCollection = () => {
  return (
    <section className={styles.featureCollection}>
      <ContextBox
        span="Electram constituto eam id. Eum illud option te, ea vim tractatos."
        text="Mazim putant ex mea, et nullam suscipit eam, qui accommodare vituperatoribus at."
      />
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
export default FeatureCollection;
