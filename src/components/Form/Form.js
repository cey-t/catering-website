import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input/Input";
import Button from "../Button/Button";
import styles from "./Form.module.scss";
import classNames from "classnames";
const Form = ({
  onSubmit,
  inputs,
  inputStyle,
  buttonLabel,
  link,
  formStyle,
}) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={classNames(styles.form, formStyle)}
    >
      {inputs.map((input) => (
        <Input
          key={input.name}
          input={inputStyle}
          onChange={handleChange}
          value={formData[input.name] || ""}
          {...input}
        />
      ))}
      <Button
        label={buttonLabel}
        className={styles.button}
        buttonContainer={styles.buttonContainer}
      />
      {link && (
        <Link to="/signup" className={styles.signupLink}>
          Sign Up
        </Link>
      )}
    </form>
  );
};
export default Form;
