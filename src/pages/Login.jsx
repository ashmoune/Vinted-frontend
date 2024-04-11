import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "site--backend-vinted--rh6mx4gc4kyd.code.run/user/login",
        {
          email,
          password,
        }
      );
      // console.log(response.data );
      const { token } = response.data;
      handleToken(token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="signup-container" onSubmit={handleSubmit}>
        <h1>Se connecter</h1>
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
        <button>
          <input type="submit" value="Se connecter" />
        </button>
      </form>
    </>
  );
};
export default Login;
