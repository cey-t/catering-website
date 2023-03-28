import { useState } from "react";
import ContextBox from "components/ContextBox/ContextBox";
import { contactFormData } from "utils/data/inputData";
import { apiURL } from "utils/api/api";
import styles from "./ContactForm.module.scss";
import Form from "components/Form/Form";
import classNames from "classnames";
const ContactForm = () => {
  const [formMessage, setFormMessage] = useState(false);

  const handleSubmit = async (e) => {
    try {
      const res = await fetch(`${apiURL}/api/inquiries`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: e,
        }),
      });
      if (!res.ok) throw new Error("Something went wrong");

      setFormMessage(true);
    } catch (error) {
      console.log(error.message);
    }
  };
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
        {formMessage ? (
          <h3 className={styles.contactText}>Form submitted successfully!</h3>
        ) : (
          <Form
            onSubmit={handleSubmit}
            inputs={contactFormData}
            buttonLabel="Submit"
          />
        )}
      </div>
    </section>
  );
};
export default ContactForm;
