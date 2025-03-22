import titleCase from "../utils/titleCase";
import { useProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { activeCategory, setActiveCategory } = useProductContext();
  const handleClick = () => {
    if (activeCategory) {
      setActiveCategory("");
      return;
    }
    setActiveCategory(product.category);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <Link to={`products/${product.id}`}>
        <figure className="px-10 pt-10">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl max-h-40"
          />
        </figure>
      </Link>
      <div className="card-body items-center text-center">
        <h2 className="card-title hover:underline">
          <Link to={`products/${product.id}`}>{product.title}</Link>
        </h2>
        <p className="font-semibold text-2xl mt-2">{product.price} €</p>
        <div className="card-actions">
          <button className="btn btn-primary">Add to cart</button>
        </div>
        <div className="link link-neutral text-sm" onClick={handleClick}>
          {activeCategory
            ? `See All Categories`
            : `More from ${titleCase(product.category)}`}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
