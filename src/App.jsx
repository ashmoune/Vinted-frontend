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
import Publish from "./pages/Publish";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [userToken, setUserToken] = useState(Cookies.get("usertoken")) || null;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `site--backend-vinted--rh6mx4gc4kyd.code.run/offers`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p className="loading">Loading ...please wait</p>
  ) : (
    <Router>
      <Header handleToken={handleToken} userToken={userToken} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/Offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
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
  );
}

export default App;
