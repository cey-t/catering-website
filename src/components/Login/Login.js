import { useNavigate } from "react-router-dom";
import { useAuthContext } from "context/AuthContext";
import { API } from "constant";
import { setToken } from "helper";
// import { notification } from "antd";
import { SignUpInputs } from "utils/data/inputData";
import Form from "../Form/Form";
import styles from "./Login.module.scss";

const Login = () => {
  const loginInputsData = SignUpInputs.slice(1, 3);
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const login = async (e) => {
    try {
      const value = {
        identifier: e.email,
        password: e.password,
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
        // notification["success"]({
        //   message: "Login Successful",
        //   description: ` Welcome back ${data.user.username} !`,
        //   duration: 5,
        // });
        setToken(data.jwt);
        setUser(data.user);
        navigate("/blog", { replace: true });
      }
    } catch (error) {
      console.log(error);
      // notification["error"]({
      //   message: "Sign Up Failed",
      //   description: error.message,
      //   duration: 5,
      // });
    }
  };
  return (
    <section className={styles.loginRoot}>
      <Form
        link
        onSubmit={login}
        inputs={loginInputsData}
        buttonLabel="Log In"
      />
    </section>
  );
};
export default Login;
