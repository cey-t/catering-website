import FeatureContainer from "components/FeatureBox/FeatureBox";
import { FeatureBlogData } from "utils/data/featuresData";
import styles from "./FactBlog.module.scss";
const FactBlog = () => {
  return (
    <section className={styles.factBlogFeatures}>
      {FeatureBlogData.map((data) => (
        <FeatureContainer
          key={data.id}
          title={data.title}
          content={data.content}
          logo={data.icon}
        />
      ))}
    </section>
  );
};
export default FactBlog;
