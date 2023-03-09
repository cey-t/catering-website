import Button from "components/Button/Button";
import Features from "./Features/Features";
import PremiumDeal from "components/PremiumDeal/PremiumDeal";
import ContactUs from "components/ContactSection/ContactUs";
import About from "./About/About";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <>
      <section className={styles.homePage}>
        <div className={styles.introductionSection}>
          <div className={styles.homeTitleContainer}>
            <h1 className={styles.homeHeader}>Propel your bussiness</h1>
            <p className={styles.homeIntro}>
              Propel comes with everything you need to get your business
              rolling.
            </p>
            <Button label="Get Started" link />
          </div>
        </div>
      </section>
      <Features />
      <About />
      <PremiumDeal link />
      <ContactUs />
    </>
  );
};
export default Home;
