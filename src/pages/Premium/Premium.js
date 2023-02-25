import HeaderContextBox from "components/HeaderInnerContent/HeaderContextBox";
import ContactUs from "components/ContactSection/ContactUs";
import PremiumDeal from "components/PremiumDeal/PremiumDeal";
import styles from "./Premium.module.scss";
const Premium = () => {
  return (
    <section className={styles.premiumPage}>
      <HeaderContextBox
        name="Premium"
        header="Personalized and total service."
        content="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur."
      />
      <PremiumDeal />
      <ContactUs />
    </section>
  );
};
export default Premium;
