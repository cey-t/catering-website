import HeaderContextBox from "components/HeaderInnerContent/HeaderContextBox";
import ContactUs from "components/ContactSection/ContactUs";
import PremiumIntro from "./PremiumIntro/PremiumIntro";
import PremiumDeal from "components/PremiumDeal/PremiumDeal";
const Premium = () => {
  return (
    <section>
      <HeaderContextBox
        hasBorder
        name="Premium"
        header="Personalized and total service."
        content="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur."
      />
      <PremiumIntro />
      <PremiumDeal />
      <ContactUs />
    </section>
  );
};
export default Premium;
