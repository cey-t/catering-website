import styles from "./PremiumBanner.module.scss";
import { Link } from "react-router-dom";
import cookies from "images/Feature/cookies.jpg";
const PremiumBanner = () => {
  return (
    <section className={styles.premiumBannerContainer}>
      <img
        src={cookies}
        className={styles.premiumBannerImage}
        width={"100%"}
        alt="premium banner background"
      />
      <div className={styles.innerContentRoot}>
        <div className={styles.innerContentBox}>
          <div className={styles.goPremiumContainer}>
            <div className={styles.goPremium}>
              <h3 className={styles.pageName}>Go Premium </h3>
              <div className={styles.border}></div>
            </div>
            <h2 className={styles.header}>
              <span>Tation temporibus ei usu, vim an eirmod accus cu.</span>
              Tibique suscipiantur, per ex scripta fabellas petentium.
            </h2>
          </div>
          <Link to="/premium">
            <button className={styles.goPremiumButton}>Go Premium</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default PremiumBanner;
