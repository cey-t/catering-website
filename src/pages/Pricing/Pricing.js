import HeaderContextBox from "components/HeaderInnerContent/HeaderContextBox";
import PricingInfo from "./PricingInfo/PricingInfo";
import ContactUs from "components/ContactSection/ContactUs";
const Pricing = () => {
  return (
    <section>
      <HeaderContextBox
        name="Pricing"
        header="A payment plan for every occasion."
        content="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur."
      />
      <PricingInfo />
      <ContactUs />
    </section>
  );
};
export default Pricing;
