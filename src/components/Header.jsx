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
          <Link to>
            <button>S'inscrire</button>
          </Link>
          <button>Se connecter</button>
          <button className="button-sale">Vends tes articles</button>
        </div>
      </section>
    </>
  );
};

export default Header;
