import styles from "./GetStarted.module.scss";
import classNames from "classnames";
const GetStarted = () => {
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

          <form>
            <div className={styles.inputField}>
              <input
                type="text"
                required
                className={styles.input}
                placeholder="Full Name"
                name="name"
              />
              <input
                type="email"
                required
                className={styles.input}
                placeholder="claire@gmail.com"
              />
              <textarea
                type="text"
                required
                className={styles.input}
                placeholder="Tell us all about it!"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default GetStarted;
