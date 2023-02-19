import styles from "./PremiumDeal.module.scss";
import peach from "images/Common/peach.jpg";
import granola from "images/Common/granola.jpg";
import { Link } from "react-router-dom";
const PremiumDeal = () => {
  const premiumInfo = [
    {
      id: 1,
      image: peach,
      span: "Ex tempor euismod sapientem ouis lexor pro.",
      title: "Ad vix dicta iudico singulis, ius ex mollis veritus.",
      info: " Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos ocurreret splendide hendrerit. Dicant placerat democritum eos id, sit mollis invidunt mediocritatem ei, ne fuisset dolores periculis sed",
    },
    {
      id: 2,
      image: granola,
      span: "Te elit antiopam vix zril recusabo ut pri.",
      title: "Quas suscipit ad mea verear vivendo tincidunt",
      info: "Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.",
    },
  ];
  return (
    <div className={styles.premiumBox}>
      <div className={styles.border}></div>
      {premiumInfo.map((feature) => (
        <div key={feature.id} className={styles.premiumDeal}>
          <img
            src={feature.image}
            alt="peach "
            className={styles.premiumImages}
            width={"100%"}
          />
          <div className={styles.premiumFeature}>
            <h2 className={styles.premiumTitle}>
              <span className={styles.highlight}>{feature.span}</span>
              {feature.title}
            </h2>
            <p className={styles.premiumSubText}>{feature.info}</p>
          </div>
        </div>
      ))}
      <div className={styles.footerPremiumDealSection}>
        <h3>Wanna know more about the Premium deal?</h3>
        <Link className={styles.link} to="/premium">
          SEE THE FULL RANGE OF PREMIUM
        </Link>
      </div>
      <div className={styles.border}></div>
    </div>
  );
};
export default PremiumDeal;
