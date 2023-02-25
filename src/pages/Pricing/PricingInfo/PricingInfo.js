import styles from "./PricingInfo.module.scss";
import ContextBox from "components/ContextBox/ContextBox";
const PricingInfo = () => {
  return (
    <section className={styles.pricingInfoRoot}>
      <ContextBox
        span="We offer multiple options."
        text="Kid’s birthday party? Yup, we can cover that. A wedding? No problem, we got you. You get the idea."
      />
    </section>
  );
};
export default PricingInfo;
