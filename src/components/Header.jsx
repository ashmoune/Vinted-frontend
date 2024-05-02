import logo from "../assets/images/logo-vinted.svg";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/styles/header.css";

const Header = ({
  handleToken,
  userToken,
  setUserToken,
  setSearch,
  sortPrice,
  setSortPrice,
}) => {
  const location = useLocation();
  return (
    <section className="header container">
      <div className="logo">
        <>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </>
      </div>

      <div className="nav-header-container">
        <div className="search-container">
          <FontAwesomeIcon
            className="search-input-icon"
            icon="fa-solid fa-magnifying-glass"
          />
          <input
            type="text"
            className="search-input"
            placeholder="Recherche des articles"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {location.pathname === "/" ? (
          <div className="sort-container">
            <span>Trier par prix </span>
            <label className="checkbox">
              <input
                type="checkbox"
                checked={sortPrice}
                onChange={() => setSortPrice(!sortPrice)}
                name="price"
              />
              <span className="checkmark"></span>
            </label>
          </div>
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
