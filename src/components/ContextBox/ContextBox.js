import styles from "./ContextBox.module.scss";
const ContextBox = ({ text, span }) => {
  return (
    <section className={styles.contextContainer}>
      <h2 className={styles.contextText}>
        <span className={styles.span}>{span}</span>
        {text}
      </h2>
    </section>
  );
};
export default ContextBox;
