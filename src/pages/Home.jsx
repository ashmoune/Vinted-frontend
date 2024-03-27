import React from "react";
import banner from "../assets/images/banner2.jpg";

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
                <div className="card-avatar-username" key={offers.id}>
                  {/* {offers.owner.account.avatar} */}
                  {offers.owner.account.username}
                  <img src={offers.product_image.secure_url} alt="" />
                  {offers.product_details.map((product, index) => {
                    return <div key={index}>{product.marque}</div>;
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
