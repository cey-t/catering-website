import styles from "./ContactUs.module.scss";
import HeaderContextBox from "components/HeaderInnerContent/HeaderContextBox";
import ContactForm from "./ContactForm/ContactForm";
const ContactUs = () => {
  return (
    <section className={styles.contactUsRoot}>
      <HeaderContextBox
        name="Contact"
        header="Have a question for us? Go for it."
        content="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur."
      />
      <ContactForm />
    </section>
  );
};
export default ContactUs;
