import { useParams, Link } from "react-router-dom";

import { useProductDetails } from "../context/ProductsProvider";
import Loader from "../components/Loader";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { SiOpenproject } from "react-icons/si";

import styles from "../styles/DetailsPage.module.css";

function DetailsPage() {
  const { id } = useParams();
  const productDetails = useProductDetails(+id);
  const { image, description, title, price, category } = productDetails;

  if (!productDetails) return <Loader />;

  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {category}
        </p>
        <div className={styles.price}>
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
