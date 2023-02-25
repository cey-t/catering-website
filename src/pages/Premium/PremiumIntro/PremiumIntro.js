import styles from "./PremiumIntro.module.scss";
import ContextBox from "components/ContextBox/ContextBox";
import FeatureContainer from "components/FeatureBox/FeatureBox";
import bananaCake from "images/Premium/banana-cake.jpg";
import sausageIcon from "images/Feature/sausage.svg";
import classNames from "classnames";
const PremiumIntro = () => {
  return (
    <section className={styles.premiumIntroRoot}>
      <div>
        <ContextBox
          span="Here's a different option for you. "
          text="Eos in maluisset mediocritatem. Cu qui admodum inimicus, te mei debet qualisque."
          className={styles.contextBox}
        />
        <div className={styles.imageContainer}>
          <img
            src={bananaCake}
            width={"100%"}
            className={styles.bananaImage}
            alt="banana-cake"
          />
          <div className={styles.feature}>
            <FeatureContainer
              title="Pro ad constituto el"
              content="Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos ocurreret splendide hendrerit. Dicant placerat democritum eos id, sit mollis invidunt mediocritatem ei."
              logo={sausageIcon}
              className={styles.featureContainer}
            />
          </div>
        </div>
      </div>
      <div className={styles.opinionContainer}>
        <p className={styles.opinions}>WHAT THE PEOPLE SAY</p>
        <h1 className={styles.blockQuote}>
          “Great customer service, kuddos for doing things the right way rather
          than the easy way. I am still getting compliments about the food
          served at my wedding.”
        </h1>
        <p className={classNames(styles.blogWriter, styles.opinions)}>
          Paul Morgan
        </p>
      </div>
    </section>
  );
};
export default PremiumIntro;
