import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Login.module.scss";
import { useAuthContext } from "context/AuthContext";
import { useNavigate } from "react-router-dom";
import { API } from "constant";
import { setToken } from "helper";

const Login = () => {
  const [user, settUser] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    settUser({ ...user, [name]: value });
  };
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const resetForm = () => {
    settUser({ email: "", password: "" });
  };
  const logIn = async (e) => {
    e.preventDefault();
    try {
      const value = {
        identifier: user.email,
        password: user.password,
      };
      const res = await fetch(`${API}/auth/local`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await res.json();
      if (data?.error) {
        throw data?.error;
      } else {
        console.log("error");
        setToken(data.jwt);
        setUser(data.user);
        navigate("/blog", { replace: true });
        resetForm();
      }
    } catch (error) {
      console.log(error);
    }
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
          // onClick={logIn}s
          buttonContainer={styles.buttonContainer}
          className={styles.button}
        />

        <Link to="/signup" className={styles.signupLink}>
          Sign up
        </Link>
      </form>
    </section>
  );
};
export default Login;
