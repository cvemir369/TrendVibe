import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const getProductById = async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error during getProductById GET request", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  // Generate an array of stars based on the rating
  const renderStars = () => {
    const stars = [];
    const rating = product.rating ? product.rating.rate : 0;

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <input
          key={i}
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked={i <= rating}
          disabled // Disable the inputs to make them read-only
        />
      );
    }

    return stars;
  };

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="flex justify-center my-60">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <div className="rating rating-md">
              {renderStars()}
              <div className="ml-2">
                {product.rating ? product.rating.rate : "N/A"}
              </div>
            </div>
            <p className="mb-4">{product.description}</p>
            <p className="font-semibold text-2xl my-2">${product.price}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
