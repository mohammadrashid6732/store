import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

import styles from "../styles/Layout.module.css";
import { useCart } from "../context/CartProvider";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">SAMIN SHOP</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p> deveoped by mohammad with love </p>
      </footer>
    </>
  );
}

export default Layout;
