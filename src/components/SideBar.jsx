import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
import { category } from "../constants/list";
import styles from "../styles/SideBar.module.css";

function SideBar({ setQuery, query }) {
  const categoriHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;

    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categoris</p>
      </div>
      <ul onClick={categoriHandler}>
        {category.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
