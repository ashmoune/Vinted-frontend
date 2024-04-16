import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const OtherProductsBySeller = ({ sellerId, id }) => {
  const [otherProducts, setOtherProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchOtherProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/offers/`);
        // console.log(response.data);
        // stocke dans une variable toutes les offres correspondantes sauf celles de l'ID
        const filteredProduct = response.data.offers.filter(
          (product) => product._id !== id
        );
        //mise à jour des autres produits avec le filtre
        setOtherProducts(filteredProduct);
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
      <h2>Articles disponibles</h2>
      <ul>
        {otherProducts.map((product) => (
          <li key={product._id}>
            {sellerId === product.owner._id ? (
              <Link to={`/Offer/${product._id}`}>
                <div>{product.product_name}</div>
                <div>
                  <img src={product.product_image.secure_url} alt="" />
                </div>
                <div></div>
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherProductsBySeller;
