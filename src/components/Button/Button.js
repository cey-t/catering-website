import styles from "./Button.module.scss";
import classNames from "classnames";
const Button = ({ label, onClick, className }) => {
  return (
    <div onClick={onClick} className={styles.buttonContainer}>
      <button className={classNames(styles.button, className)}>{label}</button>
    </div>
  );
};
export default Button;
