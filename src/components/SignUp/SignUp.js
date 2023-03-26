import styles from "./SignUp.module.scss";
import { useAuthContext } from "context/AuthContext";
import { API } from "constant";
import { useNavigate } from "react-router-dom";
import { setToken } from "helper";
import { SignUpInputs } from "utils/data/inputData";
import Form from "../Form/Form";
const SignUp = () => {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const signUp = async (e) => {
    try {
      const res = await fetch(`${API}/auth/local/register`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(e),
      });
      const data = await res.json();
      if (data?.error) {
        throw data?.error;
      } else {
        console.log("success");
        setToken(data.jwt);
        setUser(data.user);
        navigate("/login", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.signUpPage}>
      <Form inputs={SignUpInputs} onSubmit={signUp} buttonLabel={"Sign Up"} />
    </div>
  );
};
export default SignUp;
