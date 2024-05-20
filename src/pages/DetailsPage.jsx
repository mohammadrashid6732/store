import { useParams, Link } from "react-router-dom";

import { useProductDetails } from "../context/ProductsProvider";
import Loader from "../components/Loader";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { SiOpenproject } from "react-icons/si";

function DetailsPage() {
  const { id } = useParams();
  const productDetails = useProductDetails(+id);
  const { image, description, title, price, category } = productDetails;

  if (!productDetails) return <Loader />;

  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <SiOpenproject />
          {category}
        </p>
        <div>
          <span>
            <IoMdPricetag />
            {price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back To Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
