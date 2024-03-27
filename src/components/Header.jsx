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
          <button>S'inscrire</button>
          <button>Se connecter</button>
          <button>Vends tes articles</button>
        </div>
      </section>
    </>
  );
};

export default Header;
