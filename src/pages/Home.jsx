import { useEffect, useState } from "react";
import React from "react";
import banner from "../assets/images/banner2.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import CardContainer from "../components/CardContainer";

const Home = ({ search, sortPrice }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://site--backend-vinted--rh6mx4gc4kyd.code.run/offers?sort=${
          sortPrice ? "price-desc" : "price-asc"
        }&title=${search}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [search, sortPrice]);
  // const username = response.data;

  return isLoading ? (
    <p>Loading please wait ..</p>
  ) : (
    <>
      <div className="main">
        <div className="hero-block">
          <div className="hero-block-background">
            <div className="image-web">
              <div className="box">
                <h2>
                  Prêts à faire du tri <br />
                  dans vos placards ?
                </h2>
                <Link to="/publish">
                  <button>Commencer à vendre</button>
                </Link>
              </div>
              <img src={banner} alt="" />
            </div>
          </div>
          <div className="container"></div>
        </div>
        <div className="home-card-wrapper container">
          {/* composant card container */}
          <CardContainer data={data} />
        </div>
        {/* <footer>
          <p>
            <span>
              <img src="" alt="" />
            </span>
            Made at
            <a href="https://www.lereacteur.io/"> Le Reacteur</a> by
            <a href="https://github.com/ashmoune"> Hadrien MONNIOT</a>
          </p>
        </footer> */}
      </div>
    </>
  );
};

export default Home;
