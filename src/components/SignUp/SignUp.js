import styles from "./SignUp.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import { useAuthContext } from "context/AuthContext";
import { API } from "constant";
import { useNavigate } from "react-router-dom";
import { setToken } from "helper";
const SignUp = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { setUser } = useAuthContext();
  console.log(setUser);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
  const signUp = async (e) => {
    e.preventDefault();
    try {
      // const value = {
      //   identifier: newUser.email,
      //   password: newUser.password,
      //   name: newUser.name,
      // };
      const res = await fetch(`${API}/auth/local/register`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const data = await res.json();
      console.log(data);
      if (data?.error) {
        throw data?.error;
      } else {
        setToken(data.jwt);
        setUser(data.user);
        console.log(`Welcome ${data.user.username}`);
        navigate("/login", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.signUpPage}>
      <form onSubmit={signUp} className={styles.formContainer}>
        <div className={styles.formInputs}>
          <label className={styles.inputLabel}>
            Name
            <input
              type="text"
              name="username"
              value={newUser.username}
              onChange={handleChange}
              className={styles.inputBox}
              placeholder="Ceyda "
            />
          </label>
          <label className={styles.inputLabel}>
            Email
            <input
              type="email"
              name="email"
              value={newUser.email}
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
              value={newUser.password}
              className={styles.inputBox}
              placeholder="**********"
            />
          </label>
        </div>
        <Button
          label="Log In"
          // onClick={signUp}
          buttonContainer={styles.buttonContainer}
          className={styles.button}
        />
      </form>
    </div>
  );
};
export default SignUp;
