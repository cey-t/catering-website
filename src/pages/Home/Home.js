import styles from "./Home.module.scss";
import FeatureContainer from "../../components/FeatureItemContainer/FeatureContainer";
const Home = () => {
  return (
    <>
      <section className={styles.homePage}>
        <div className={styles.homeTitleContainer}>
          <h1 className={styles.homeHeader}>Propel your bussiness</h1>
          <p className={styles.homeIntro}>
            Propel comes with everything you need to get your business rolling.
          </p>
          <button className={styles.getStartedButton}>Get Started</button>
        </div>
      </section>
      <FeatureContainer />
    </>
  );
};
export default Home;
