import { useEffect, useState } from "react";
import React from "react";
import banner from "../assets/images/banner2.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = ({ search, sortPrice }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/offers?sort=${
          sortPrice ? "price-desc" : "price-asc"
        }&title=${search}`
      );
      // console.log(response.data);
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
          <div className="card-container">
            {data &&
              data.offers &&
              data.offers.map((offer) => (
                <div className="card-avatar-username" key={offer._id}>
                  <div className="avatar">
                    {offer.owner.account &&
                      offer.owner.account.avatar &&
                      offer.owner.account.avatar.secure_url && (
                        <img
                          src={offer.owner.account.avatar.secure_url}
                          alt=""
                        />
                      )}
                    {offer.owner.account.username}
                  </div>
                  <Link key={offer.product_name} to={`/Offer/${offer._id}`}>
                    {offer.product_image && offer.product_image.secure_url && (
                      <img src={offer.product_image.secure_url} alt="" />
                    )}
                  </Link>

                  <div key={offer._id}>{offer.product_price} €</div>
                  {offer.product_details.map((product, index) => (
                    <div key={index}>
                      <div>{product.MARQUE}</div>
                      <div>{product.TAILLE}</div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
