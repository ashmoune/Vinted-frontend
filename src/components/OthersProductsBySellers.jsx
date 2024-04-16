import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const OtherProductsBySeller = ({ sellerId }) => {
  const [otherProducts, setOtherProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchOtherProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/offers/`);
        setOtherProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching other products:", error);
        setIsLoading(false);
      }
    };

    fetchOtherProducts();
  }, [sellerId]);

  if (isLoading) {
    return <p>Loading other products...</p>;
  }

  return (
    <div>
      <h2>Other Products by this Seller:</h2>
      <ul>
        {otherProducts.offers.map((product) => (
          <li key={product._id}>
            {sellerId === product.owner._id ? (
              <Link to={`/Offer/${product.id}`}>{product.product_name}</Link>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherProductsBySeller;
