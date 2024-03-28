import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Offer = () => {
  const [data, SetData] = useState({});
  const [isLoading, SetIsLoading] = useState(true);
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
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
      <div className="offer-container">
        <h2>{data.product_name}</h2>
        <div className="offer-container-img">
          <img src={data.product_image.secure_url} alt="" />
        </div>
        <div className="offer-info">
          {data.product_details.map((detail) => {
            // console.log(detail);
            const keys = Object.keys(detail);
            // console.log(keys);
            const keyName = keys[0];
            // console.log(keyName);
            return (
              <p key={keyName}>
                <span>{keyName}</span>
                <span>{detail[keyName]}</span>
              </p>
            );
          })}
        </div>
        <Link to="/">Retour vers L'accueil</Link>
      </div>
    </>
  );
};

export default Offer;
