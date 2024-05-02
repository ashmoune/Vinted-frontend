import { Link } from "react-router-dom";
import React from "react";
import "../assets/styles/cardContainer.css";

const CardContainer = ({ data }) => {
  return (
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
                    <img src={offer.owner.account.avatar.secure_url} alt="" />
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
  );
};

export default CardContainer;
