import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
const Button = ({ label, onClick, className, buttonContainer, link }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.buttonContainer, buttonContainer)}
    >
      {link ? (
        <Link to={"/getStarted"} className={styles.link}>
          <button className={classNames(className, styles.button)}>
            {label}
          </button>
        </Link>
      ) : (
        <button className={classNames(styles.button, className)}>
          {label}
        </button>
      )}
    </div>
  );
};
export default Button;
