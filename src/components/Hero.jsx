import coverImage from "../assets/images/pexels-karolina-grabowska-4968391.jpg";

const Hero = () => {
  const handleShopNowClick = () => {
    const section = document.getElementById("product-list");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="hero min-h-[400px] m-3 rounded-xl shadow-2xl"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
      <div className="hero-content text-center p-8">
        <div className="max-w-3xl">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Shop the Latest Trends in Fashion, Jewelry & Tech!
            </h1>
            <p className="text-lg mb-8 text-white">
              Discover premium products at unbeatable prices. Free shipping on
              all orders above $50, 30-Day Returns!
            </p>
            <button
              className="btn btn-primary btn-lg transform transition-transform duration-300 hover:scale-105"
              onClick={handleShopNowClick}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
