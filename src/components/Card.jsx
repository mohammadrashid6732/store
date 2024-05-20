//package
import { Link } from "react-router-dom";
//context
import { useCart } from "../context/CartProvider";
//hepler
import { proudctsQuantity, shortTexter } from "../helper/helper";
//icons
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
//styles
import styles from "../styles/Card.module.css";
import { MdDeleteOutline } from "react-icons/md";

function Card({ data }) {
  const { id, image, price, title } = data;
  const [state, dispatch] = useCart();

  const quantity = proudctsQuantity(state, id);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortTexter(title)}</h3>
      <p>{price}</p>
      <div className={styles.action}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>

        <div>
          {quantity === 1 && (
            <button onClick={() => clickHandler("REMOVE_ITEM")}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => clickHandler("DESCREASE")}>-</button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
