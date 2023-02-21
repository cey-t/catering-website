import styles from "./Features.module.scss";
import HeaderContextBox from "components/HeaderInnerContent/HeaderContextBox";
import PremiumDeal from "components/PremiumDeal/PremiumDeal";
import ContactUs from "components/ContactSection/ContactUs";
import FeatureCollection from "./FeatureCollection/FeatureCollection";
import PremiumBanner from "./PremiumBanner/PremiumBanner";
const Features = () => {
  return (
    <section className={styles.featurePage}>
      <HeaderContextBox
        name="Features"
        header="Expect only the best meals from us."
        content="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur."
      />
      <FeatureCollection />
      <PremiumDeal />
      <PremiumBanner />
      <ContactUs />
    </section>
  );
};
export default Features;
