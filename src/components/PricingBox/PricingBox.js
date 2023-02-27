import styles from "./PricingBox.module.scss";
const PricingBox = ({ type, price, content, contains, borderStyle }) => {
  return (
    <section className={styles.pricingBoxContainer}>
      <div className={styles.header}>
        <h3 className={styles.partyType}>{type} Party</h3>
        <h1 className={styles.priceText}>
          {price} <span className={styles.currency}> USD</span>
        </h1>
        <p className={styles.contentText}>{content}</p>
      </div>
      <div className={borderStyle}></div>
      <div className={styles.features}>
        <p className={styles.containsText}>{contains}</p>
      </div>
    </section>
  );
};
export default PricingBox;
