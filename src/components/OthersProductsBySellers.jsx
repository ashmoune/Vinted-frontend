import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";

const OtherProductsBySeller = ({ sellerId, id }) => {
  const [otherProducts, setOtherProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchOtherProducts = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-vinted--rh6mx4gc4kyd.code.run/offers/`
        );
        // console.log(response.data);
        // stocke dans une variable toutes les offres correspondantes sauf celles de l'ID
        const filteredProduct = response.data.offers.filter(
          (product) => product._id !== id
        );
        console.log(response.data);
        // console.log(filteredProduct);
        //mise à jour des autres produits avec le filtre
        setOtherProducts(filteredProduct);
        // console.log(otherProducts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching other products:", error);
        setIsLoading(false);
      }
    };

    fetchOtherProducts();
  }, [sellerId, id]);

  if (isLoading) {
    return <p>Loading other products...</p>;
  }

  return (
    <div>
      <h2>Du même vendeur</h2>
      <ul>
        {otherProducts.map((product) => (
          <li key={product._id}>
            {/* parmis toutes les offres on retient celle avec le meme owner ID */}
            {sellerId === product.owner._id ? (
              <Link to={`/Offer/${product._id}`}>
                <CardContainer data={{ offers: [product] }} />
                {/* console.log([product]); */}
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherProductsBySeller;
