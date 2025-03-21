import titleCase from "../utils/titleCase";
import { useProductContext } from "../context/ProductContext";

const Category = ({ category }) => {
  const { activeCategory, setActiveCategory } = useProductContext();
  const handleClick = () => {
    setActiveCategory(category);
  };

  return (
    <a
      role="tab"
      className={`tab ${activeCategory === category ? "tab-active" : ""}`}
      onClick={handleClick}
    >
      {titleCase(category)}
    </a>
  );
};

export default Category;
