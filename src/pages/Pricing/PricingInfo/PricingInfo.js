import styles from "./PricingInfo.module.scss";
import ContextBox from "components/ContextBox/ContextBox";
import { Pricing } from "utils/data/pricing";
import PricingBox from "components/PricingBox/PricingBox";
const PricingInfo = () => {
  return (
    <section className={styles.pricingInfoRoot}>
      <ContextBox
        span="We offer multiple options."
        text="Kid’s birthday party? Yup, we can cover that. A wedding? No problem, we got you. You get the idea."
        className={styles.contextBox}
      />
      <div className={styles.pricingInformationBox}>
        {Pricing.map((catering) => {
          const cateringContains = catering.contains.map((item) => (
            <p>{item}</p>
          ));
          return (
            <PricingBox
              type={catering.type}
              price={catering.price}
              content={catering.content}
              borderStyle={styles.border}
              contains={cateringContains}
            />
          );
        })}
      </div>
    </section>
  );
};
export default PricingInfo;
