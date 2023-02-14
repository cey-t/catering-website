import styles from "./Button.module.scss";
import classNames from "classnames";
const Button = ({ label, color = "green" }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={classNames(styles.button, styles[color])}>
        {label}
      </button>
    </div>
  );
};
export default Button;
