import styles from "./ContactUs.module.scss";
import ContextBox from "../ContextBox/ContextBox";
import Button from "../Button/Button";
const ContactUs = () => {
  return (
    <section className={styles.contactSection}>
      <div>
        <h3 className={styles.partyOn}>Party On --</h3>
        <ContextBox
          span="Quas suscipit ad mea."
          text="Pri cu dico labores officiis odio principes complectitur ad sea."
        />
      </div>
      <Button label="Get Started" />
    </section>
  );
};
export default ContactUs;
