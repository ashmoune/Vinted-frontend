import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });
      console.log(response.data);
      const { token } = response.data;
      handleToken(token);
      navigate("/");
    } catch (error) {
      setError("Utilisateur ou mot de passe inconnu");
      console.log(error);
    }
  };

  return (
    <>
      <main className="login">
        <h2>Bienvenue</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Se connecter</button>
        </form>
      </main>
      {error && <p className="error-message">{error}</p>}
    </>
  );
};

export default Login;
