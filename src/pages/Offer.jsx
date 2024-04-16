import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import desktop from "../assets/images/desktop-1.png";
import OtherProductsBySeller from "../components/OthersProductsBySellers";

const Offer = () => {
  const [data, SetData] = useState({});
  const [isLoading, SetIsLoading] = useState(true);
  const { id } = useParams();

  // console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/offers/${id}`);
        // console.log(response.data);
        SetData(response.data);
        SetIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading please wait</p>
  ) : (
    <>
      <div className="img-desktop">
        <img src={desktop} alt="" />
      </div>
      <div className="offer-container">
        <div className="offer-container-img">
          <img src={data.product_image.secure_url} alt="" />
        </div>

        <div className="offer-info">
          <div className="offer-info-details">
            <h2>{data.product_price}€</h2>
            {data.product_details.map((detail) => {
              // console.log(detail);
              const keys = Object.keys(detail);
              // console.log(keys);
              const keyName = keys[0];
              return (
                <p className="offer-paraph-info" key={keyName}>
                  <span>{keyName}</span>
                  <span>{detail[keyName]}</span>
                </p>
              );
            })}
          </div>
          <div className="offer-info-desc">
            <h2>{data.product_name}</h2>
            <p>{data.product_description}</p>
          </div>
          <div className="offer-owner">
            {data.owner.account &&
              data.owner.account.avatar &&
              data.owner.account.avatar.secure_url && (
                <span className="card-avatar-username-offer">
                  <img src={data.owner.account.avatar.secure_url} alt="" />
                </span>
              )}
            <span> {data.owner.account.username}</span>
          </div>
          <button>Acheter</button>
        </div>
      </div>
      <Link to="/">Retour vers L'accueil</Link>
      <OtherProductsBySeller sellerId={data.owner._id} />
    </>
  );
};

export default Offer;
