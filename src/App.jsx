// import Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";
// import fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Cookies from "js-cookie";

// import style
import "./index.css";
import "./App.css";
import "./assets/styles/offer.css";
import "./assets/styles/home.css";

// import Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

library.add(faMagnifyingGlass);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("usertoken")) || null;
  const [sortPrice, setSortPrice] = useState(false);
  const [search, setSearch] = useState("");

  // Cette fonction permet de stocker le token dans le state et dans les cookies ou
  //  supprimer le token dans le state et dans les cookies
  const handleToken = (usertoken) => {
    if (usertoken) {
      Cookies.set("userToken", usertoken, { expires: 7 });
      setUserToken(usertoken);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };
  return (
    <>
      <Router>
        <Header
          handleToken={handleToken}
          userToken={userToken}
          setUserToken={setUserToken}
          sortPrice={sortPrice}
          setSortPrice={setSortPrice}
          setSearch={setSearch}
        />
        <Routes>
          <Route
            path="/"
            element={<Home search={search} sortPrice={sortPrice} />}
          />
          <Route path="/Offer/:id" element={<Offer />} />
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route
            path="/login"
            element={
              <Login
                handleToken={handleToken}
                userToken={userToken}
                setUserToken={setUserToken}
              />
            }
          />
          <Route path="/publish" element={<Publish userToken={userToken} />} />
        </Routes>
        <Footer />
      </Router>
      ;
    </>
  );
}

export default App;
