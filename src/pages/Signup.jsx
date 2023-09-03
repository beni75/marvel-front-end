import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        "http://site--marvel-back-end--7hx8pjwzyskf.code.run/user/signup",
        {
          username: username,
          password: password,
          email: email,
        }
      );
      console.log(response.data);
      handleToken(response.data.token);
      navigate("/characters");
    } catch (error) {
      console.log(error.response.data.message);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <section className="section-signup">
      <form className="signup-container" onSubmit={handleSubmit}>
        <h1> Créer son compte</h1>
        <input
          className="signup-input"
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          className="signup-input"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="signup-input"
          type="password"
          placeholder="Mot de passe"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button className="button-signup">Créer mon compte</button>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      </form>
    </section>
  );
};

export default Signup;
