import styles from "./Input.module.scss";
import classNames from "classnames";
const Input = ({
  label,
  formInput,
  name,
  type,
  placeholder,
  value,
  onChange,
  inputLabel,
  input,
}) => {
  return (
    <div className={classNames(styles.formInput, formInput)}>
      <label
        className={classNames(inputLabel, styles.inputLabel)}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={classNames(input, styles.inputBox)}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
