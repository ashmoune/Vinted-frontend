import logo from "../assets/images/logo-vinted.svg";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="header container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />{" "}
          </Link>
        </div>
        <div className="buttons">
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
          <button className="button-sale">Vends tes articles</button>
        </div>
      </section>
    </>
  );
};

export default Header;
