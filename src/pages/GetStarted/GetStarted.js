import { useState } from "react";
import Button from "components/Button/Button";
import styles from "./GetStarted.module.scss";
import classNames from "classnames";
import { apiURL } from "utils/api/api";
const GetStarted = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    phoneNumber: "",
    date: "",
    type: "",
  });
  const [submissionMessage, setSubmitMessage] = useState(false);
  const resetData = () => {
    setFormData({
      fullName: "",
      email: "",
      message: "",
      date: "",
      type: "",
      phoneNumber: "",
    });
  };
  const programType = [
    {
      id: "starterProgram",
      value: "Minimal Party",
    },
    {
      id: "mediumProgram",
      value: "Medial Party",
    },
    {
      id: "premiumProgram",
      value: "Premium Party",
    },
  ];
  // const submitForm = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const res = await fetch(`${apiURL}/api/customise-plans`, {
  //       method: "POST",
  //       mode: "cors",
  //       headers: { "Content-type": "application/json" },
  //       body: JSON.stringify({ data: formData }),
  //     });
  //     if (!res.ok) throw new Error("Something went wrong");
  //     const data = res.json();
  //     console.log(data);
  //     // setFormData(data);
  //     console.log(formData);
  //     resetData();
  //     setSubmitMessage(true);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`${apiURL}/api/customise-plans`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: formData,
        }),
      });
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      setFormData(data);
      resetData();
      setSubmitMessage(true);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className={styles.getStartedRoot}>
      <div className={styles.getStartedContainer}>
        <div className={styles.form}>
          <div>
            <h1 className={classNames(styles.headerText, styles.getStarted)}>
              Craft Your Ideal Catering Experience with Our Customizable Menus
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
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
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
                <input
                  type="tel"
                  required
                  className={styles.input}
                  value={formData.phoneNumber}
                  placeholder="+90 541 854 92 90"
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                />
                <input
                  type="date"
                  required
                  className={styles.input}
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
                <textarea
                  type="text"
                  required
                  className={classNames(styles.input, styles.textArea)}
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
