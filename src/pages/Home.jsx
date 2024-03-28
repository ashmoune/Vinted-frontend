import React from "react";
import banner from "../assets/images/banner2.jpg";
import { Link } from "react-router-dom";

const Home = (props) => {
  const { data } = props;
  return (
    <>
      <div className="main">
        <div className="hero-block">
          <div className="hero-block-background">
            <div className="image-web">
              <img src={banner} alt="" />
            </div>
          </div>
          <div className="container"></div>
        </div>
        <div className="home-card-wrapper container">
          <div className="card-container">
            {data.offers.map((offers) => {
              return (
                <div className="card-avatar-username" key={offers._id}>
                  <div className="avatar">
                    <img src={offers.owner.account.avatar?.secure_url} alt="" />
                    {offers.owner.account.username}
                  </div>
                  <Link key={offers.id} to={`/Offer/${offers._id}`}>
                    <img src={offers.product_image.secure_url} alt="" />
                  </Link>

                  <div key={offers.id}>{offers.product_price} €</div>

                  {offers.product_details.map((product, index) => {
                    return (
                      <>
                        <div>{product.MARQUE}</div>
                        <div>{product.TAILLE}</div>
                      </>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
