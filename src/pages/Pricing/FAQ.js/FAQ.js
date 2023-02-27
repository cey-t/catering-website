import styles from "./FAQ.module.scss";
import ContextBox from "components/ContextBox/ContextBox";
import { faq } from "utils/data/faq";
const FAQ = () => {
  return (
    <section className={styles.faqSection}>
      <ContextBox
        span="Got a question about our pricing model? "
        text="Te omnis oporteat vis, omnes reprehendunt nam in. Cum salutatus democritum argumentum an."
        className={styles.contextBox}
      />
      <div className={styles.faqContainer}>
        {faq.map((asked) => (
          <div className={styles.faq}>
            <h3 className={styles.question}>{asked.question}</h3>
            <p className={styles.answer}>{asked.answer}</p>
          </div>
        ))}
      </div>
      <div className={styles.border}></div>
    </section>
  );
};
export default FAQ;
