import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Login.module.scss";
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const resetForm = () => {
    setUser({ email: "", password: "" });
  };
  const logIn = (event) => {
    event.preventDefault();
    console.log(user);
    resetForm();
  };
  return (
    <section className={styles.loginRoot}>
      <form onSubmit={logIn} className={styles.formContainer}>
        <div className={styles.formInputs}>
          <label className={styles.inputLabel}>
            Email
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className={styles.inputBox}
              placeholder="ceydatoker2209@gmail.com"
            />
          </label>
          <label className={styles.inputLabel}>
            Password
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={user.password}
              className={styles.inputBox}
              placeholder="**********"
            />
          </label>
        </div>
        <Button
          label="Log In"
          buttonContainer={styles.buttonContainer}
          className={styles.button}
        />
      </form>
    </section>
  );
};
export default Login;
