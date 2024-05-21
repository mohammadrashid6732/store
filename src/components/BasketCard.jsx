import { MdDeleteOutline } from "react-icons/md";
import { shortTexter } from "../helper/helper";

function BasketCard({ data, clickHandler }) {
  const { image, title, quantity } = data;
  return (
    <div>
      <div>
        <img src={image} alt={title} />
        <p>{shortTexter(title)}</p>
      </div>
      <div>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DESCREASE", data)}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
