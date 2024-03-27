import { useEffect, useState } from "react";
import axios from "axios";
// import style
import "./index.css";
import "./App.css";
// import Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

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
    <p>Loading ...</p>
  ) : (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/Offer" element={<Offer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
