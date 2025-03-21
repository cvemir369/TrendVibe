import titleCase from "../utils/titleCase";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-xl max-h-40"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.title}</h2>
        <p className="font-semibold text-2xl mt-2">${product.price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Add to cart</button>
        </div>
        <div className="link link-neutral text-sm">
          More from {titleCase(product.category)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
