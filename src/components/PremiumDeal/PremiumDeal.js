import styles from "./PremiumDeal.module.scss";
import peach from "images/Common/peach.jpg";
import ContextBox from "../ContextBox/ContextBox";
// import granola from "images/Common/granola.jpg";
const PremiumDeal = () => {
  return (
    <div className={styles.premiumBox}>
      <div className={styles.premiumDeal}>
        <img src={peach} alt="peach " width={"50%"} />
        <div className={styles.premiumFeature}>
          <ContextBox
            span="Ex tempor euismod sapientem ouis lexor pro."
            text="Ad vix dicta iudico singulis, ius ex mollis veritus."
          />
          <p className={styles.premiumSubText}>
            Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos
            ocurreret splendide hendrerit. Dicant placerat democritum eos id,
            sit mollis invidunt mediocritatem ei, ne fuisset dolores periculis
            sed.
          </p>
        </div>
      </div>
    </div>
  );
};
export default PremiumDeal;
