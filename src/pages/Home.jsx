import ProductCard from "../components/ProductCard";

const Home = ({ allProducts }) => {
  return (
    <main className="m-5">
      <p>List of all categories</p>
      <div className="flex flex-wrap gap-5 justify-center">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Home;
