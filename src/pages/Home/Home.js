import Button from "components/Button/Button";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <>
      <section className={styles.homePage}>
        <div className={styles.homeTitleContainer}>
          <h1 className={styles.homeHeader}>Propel your bussiness</h1>
          <p className={styles.homeIntro}>
            Propel comes with everything you need to get your business rolling.
          </p>
          <Button label="Get Started" />
        </div>
      </section>
    </>
  );
};
export default Home;
