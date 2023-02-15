import styles from "./Features.module.scss";
const Features = () => {
  return (
    <section className={styles.featuresContainer}>
      <div className={styles.featuresHeader}>
        <h2 className={styles.featureTitle}>
          <span className={styles.featureHighlight}>
            Promoting your business and services with Propel :
          </span>
          A responsive, multi-page business template with everything you need
          propel your business.
        </h2>
      </div>
    </section>
  );
};
export default Features;
