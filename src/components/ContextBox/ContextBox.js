import styles from "./ContextBox.module.scss";
import classNames from "classnames";
const ContextBox = ({ text, span, className = null }) => {
  return (
    <section className={classNames(styles.contextContainer, className)}>
      <h2 className={styles.contextText}>
        <span className={styles.span}>{span}</span>
        {text}
      </h2>
    </section>
  );
};
export default ContextBox;
