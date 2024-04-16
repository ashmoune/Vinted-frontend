import logo from "../assets/images/logo-vinted.svg";
import { Link } from "react-router-dom";

const Header = ({
  handleToken,
  userToken,
  setUserToken,
  setSearch,
  sortPrice,
  setSortPrice,
}) => {
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
          <input
            type="text"
            className="search-input"
            placeholder="Recherche des articles"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="sort-container">
          <span>Trier par prix :</span>
          <input
            type="checkbox"
            checked={sortPrice}
            onChange={() => setSortPrice(!sortPrice)}
            name="price"
          />
        </div>
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
