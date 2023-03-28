import styles from "./Form.module.scss";
import { useState } from "react";
import Input from "./Input/Input";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const Form = ({ onSubmit, inputs, buttonLabel, link, textArea }) => {
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
    <form onSubmit={handleSubmit} className={styles.form}>
      {inputs.map((input) => (
        <Input
          key={input.name}
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
