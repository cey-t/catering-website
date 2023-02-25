import ContextBox from "components/ContextBox/ContextBox";
import styles from "./ContactForm.module.scss";
import Button from "components/Button/Button";
import classNames from "classnames";
const ContactForm = () => {
  return (
    <section className={styles.contactFormRoot}>
      <ContextBox
        span="Send us your enquiries."
        text="Eos in maluisset mediocrit. Cu qui admodum inimicus te mei."
        className={styles.contextBox}
      />
      <div className={styles.contactFormContainer}>
        <div className={styles.contactInfo}>
          <div className={styles.contactBox}>
            <p className={styles.contactText}>Email:</p>
            <p
              className={classNames(styles.contactText, styles.contactInfoText)}
            >
              ceydatoker2209@gmail.com
            </p>
          </div>
          <div className={styles.contactBox}>
            <p className={styles.contactText}>Adress:</p>
            <p
              className={classNames(styles.contactText, styles.contactInfoText)}
            >
              1263 Mission Street, Floor 3 San Francisco CA 94103 United States
            </p>
          </div>
        </div>
        <div className={styles.contactForm}>
          <div className={styles.inputContainer}>
            <input type="text" className={styles.input} placeholder="Name" />
          </div>
          <div className={styles.inputContainer}>
            <input type="text" className={styles.input} placeholder="Email" />
          </div>
          <div className={styles.inputContainer}>
            <textarea
              type="text"
              className={styles.input}
              placeholder="Tell us all about it"
            />
          </div>
          <Button label="Submit" className={styles.submitButton} />
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
