import { useEffect, useState } from "react";
import axios from "axios";
// import style
import "./index.css";
import "./App.css";
import "./assets/styles/offer.css";
import "./assets/styles/home.css";
// import Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cookies from "js-cookie";

// import Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(Cookies.get("vinted-token") || null);

  // Cette fonction permet de stocker le token dans le state et dans les cookies ou supprimer le token dans le state et dans les cookies
  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
    } else {
      Cookies.remove("userToken");
      setToken(null);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p className="loading">Loading ...please wait</p>
  ) : (
    <Router>
      <Header token={token} handleToken={handleToken} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/Offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
