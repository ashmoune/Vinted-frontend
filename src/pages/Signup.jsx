import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);

  // state qui gere le message d'erreur
  const [error, setError] = useState("");

  //   Permet de naviguer au click après avoir exécuté du code
  const navigate = useNavigate();

  // console.log(handleChange);

  const handleSubmit = async (e) => {
    // empeche le rafraichissement de la page
    e.preventDefault();
    try {
      setError("");
      const response = await axios.post(
        "https://site--backend-vinted--rh6mx4gc4kyd.code.run/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsLetter,
        }
      );

      // J'enregistre le token dans mon state et mes cookies
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
      if (error.response.status === 409) {
        setError("This Email already exists, please use another one");
      } else if (error.response.data.message === "Missing parameters") {
        setError("Please fill in all the fields");
      }
    }
  };

  return (
    <>
      {" "}
      <main className="signup">
        <h2>Inscris-toi avec ton email</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
          <label className="newsletter-label">
            <input
              type="checkbox"
              name="newsletter"
              checked={newsLetter}
              onChange={() => {
                setNewsLetter(!newsLetter);
              }}
              className="newsletter-checkbox"
            />
            <span>Recevoir la newsletter</span>
          </label>
          <button type="submit" value="S'inscrire" className="signup-button">
            {error && <p>{error} </p>}
            S'inscrire
          </button>
        </form>
        Tu as déjà un compte ?
        <Link to="/Login" className="redirection">
          Connecte-toi !
        </Link>
      </main>
    </>
  );
};
export default SignUp;
