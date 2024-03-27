import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  return (
    <>
      <div>page de l'offre :</div>
      <Link to="/">Retour vers L'accueil</Link>;
    </>
  );
};

export default Offer;
