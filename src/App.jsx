import { useEffect, useState } from "react";
import axios from "axios";
// import style
import "./index.css";
import "./App.css";
import "./assets/styles/offer.css";
import "./assets/styles/home.css";
// import Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/Offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
