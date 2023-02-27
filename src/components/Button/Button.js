import styles from "./Button.module.scss";
import classNames from "classnames";
const Button = ({ label, onClick, className, buttonContainer }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.buttonContainer, buttonContainer)}
    >
      <button className={classNames(styles.button, className)}>{label}</button>
    </div>
  );
};
export default Button;
