function HeroSection() {
  return (
    <div className="hero-section">
      <div className="overlay"> </div>
      <div className="hero-main mt-32 ml-10">
        <h1 className="hero-h1 font-semibold">
          Raining Offers For <br />
          Hot Summer!
        </h1>
        <h4 className="text-medium font-semibold mt-4 ">25% Off On Products</h4>
        <div className="hero-btns flex mt-5">
          <button>Shop Now</button>
          <button>Find More</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
