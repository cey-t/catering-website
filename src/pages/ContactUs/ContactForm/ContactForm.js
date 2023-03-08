import ContextBox from "components/ContextBox/ContextBox";
import { useState } from "react";
import Button from "components/Button/Button";
import styles from "./ContactForm.module.scss";
import classNames from "classnames";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState(false);

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    resetForm();
    setFormMessage(true);
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
        <div className={styles.contactForm}>
          {formMessage ? (
            <h3 className={styles.contactText}>Form submitted successfully!</h3>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                  value={formData.name}
                  className={styles.input}
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  value={formData.email}
                  required
                  className={styles.input}
                  placeholder="Email"
                />
              </div>
              <div className={styles.inputContainer}>
                <textarea
                  type="text"
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                  }}
                  value={formData.message}
                  className={styles.input}
                  placeholder="Tell us all about it"
                  required
                />
              </div>

              <Button label="Submit" className={styles.submitButton} />
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
