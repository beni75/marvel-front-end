import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage("");
      const response = await axios.post(
        "https://site--marvel-back-end--7hx8pjwzyskf.code.run/user/login",
        {
          email,
          password,
        }
      );
      handleToken(response.data.token);
      navigate("/characters");
    } catch (error) {
      console.log(error.response.data);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <section className="section-login">
      <form className="login-container" onSubmit={handleSubmit}>
        <h1>Page de connexion</h1>
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button className="button-connexion" type="submit">
          Se connecter
        </button>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <div>
          <Link className="link-connexion" to="/signup">
            Pas encore de compte ? Inscris-toi ici !
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
