import ProductCard from "../components/ProductCard";
import Category from "../components/Category";
import Hero from "../components/Hero";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { useProductContext } from "../context/ProductContext";

const Home = () => {
  const {
    allProducts,
    allCategories,
    activeCategory,
    setActiveCategory,
    loading,
  } = useProductContext();

  return (
    <div className="container mx-auto">
      <Hero />
      <div
        role="tablist"
        className="tabs grid-cols-5 tabs-boxed"
        id="product-list"
      >
        <a
          role="tab"
          className={`tab text-xs md:text-sm ${
            activeCategory === "" ? "tab-active" : ""
          }`}
          onClick={() => setActiveCategory("")}
        >
          All Categories
        </a>
        {allCategories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
      {loading && <LoadingSkeleton />}
      {!loading && (
        <div className="flex flex-wrap gap-5 justify-center my-5">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
