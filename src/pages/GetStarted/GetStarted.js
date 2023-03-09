import { useState } from "react";
import Button from "components/Button/Button";
import styles from "./GetStarted.module.scss";
import classNames from "classnames";
const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    type: "",
  });
  const [submissionMessage, setSubmitMessage] = useState(false);
  const resetData = () => {
    setFormData({ name: "", email: "", message: "" });
  };
  const programType = [
    {
      id: "starterProgram",
      value: "Started Program",
    },
    {
      id: "mediumProgram",
      value: "Medium Program",
    },
    {
      id: "premiumProgram",
      value: "Premium Program",
    },
  ];
  const submitForm = (event) => {
    event.preventDefault();
    console.log(formData);
    resetData();
    setSubmitMessage(true);
  };
  return (
    <section className={styles.getStartedRoot}>
      <div className={styles.getStartedContainer}>
        <div className={styles.header}>
          <h1 className={styles.headerText}>Join Us</h1>
          <p className={styles.contentText}>Let us help you to join us!</p>
        </div>
        <div className={styles.form}>
          <div>
            <h1 className={classNames(styles.headerText, styles.getStarted)}>
              Get Started
            </h1>
            <p className={classNames(styles.contentText, styles.getStarted)}>
              Fill this form to get in touch with us!
            </p>
          </div>
          {submissionMessage ? (
            <h3 className={classNames(styles.contentText, styles.formMessage)}>
              Successfully submitted ! <br />
              We will get in touch with you !{" "}
            </h3>
          ) : (
            <form onSubmit={submitForm} className={styles.formContainer}>
              <div className={styles.inputField}>
                <input
                  type="text"
                  required
                  className={styles.input}
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  name="name"
                />
                <input
                  type="email"
                  required
                  className={styles.input}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="claire@gmail.com"
                />
                <textarea
                  type="text"
                  required
                  className={styles.input}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us all about it!"
                />

                <div className={styles.programChoice}>
                  {programType.map((program) => (
                    <div key={program.id}>
                      <label
                        htmlFor={program.id}
                        className={classNames(
                          styles.checkBoxText,
                          styles.input
                        )}
                      >
                        <input
                          type="radio"
                          name="group"
                          value={program.value}
                          onChange={(e) =>
                            setFormData({ ...formData, type: e.target.value })
                          }
                        />
                        {program.value}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <Button label="Submit" className={styles.submitButton} />
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
export default GetStarted;