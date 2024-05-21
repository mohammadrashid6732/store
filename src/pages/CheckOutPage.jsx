import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartProvider";
function CheckOutPage() {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => dispatch({ type, payload });
  return (
    <div>
      <div>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default CheckOutPage;
