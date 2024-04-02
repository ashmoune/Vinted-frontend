import logo from "../assets/images/logo-vinted.svg";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ handleToken, userToken }) => {
  return (
    <section className="header container">
      <div className="logo">
        {!userToken ? (
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        ) : null}
      </div>
      <div className="buttons">
        {!userToken ? (
          <>
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>
          </>
        ) : (
          <button
            onClick={() => {
              handleToken();
            }}
          >
            Déconnexion
          </button>
        )}
        <Link to="/publish">
          <button className="button-sale">Vends tes articles</button>
        </Link>
      </div>
    </section>
  );
};

export default Header;
