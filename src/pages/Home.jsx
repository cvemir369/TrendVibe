import ProductCard from "../components/ProductCard";
import Category from "../components/Category";
import Hero from "../components/Hero";
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
    <main className="m-5">
      <Hero />
      <div
        role="tablist"
        className="tabs grid-cols-5 tabs-boxed"
        id="product-list"
      >
        <a
          role="tab"
          className={`tab ${activeCategory === "" ? "tab-active" : ""}`}
          onClick={() => setActiveCategory("")}
        >
          All Categories
        </a>
        {allCategories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
      {loading && (
        <div className="flex justify-center my-60">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}
      {!loading && (
        <div className="flex flex-wrap gap-5 justify-center">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;
