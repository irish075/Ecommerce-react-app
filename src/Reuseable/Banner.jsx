import Button from "../Reuseable/Button";
import Image7 from "../assets/Images/Image7.png";
import Image8 from "../assets/Images/Image8.png";
import Image9 from "../assets/Images/Image9.png";
import Image10 from "../assets/Images/Image10.png";

function Banner() {
  const bannerCard = [
    {
      Name: "World Shipping",
      img: Image8,
    },
    {
      Name: "Best Quality",
      img: Image7,
    },
    {
      Name: "Best Offers",
      img: Image9,
    },

    {
      Name: "Secure Payments",
      img: Image10,
    },
  ];

  return (
    <>
      <div className="relative banner-section mt-28">
        <div className="overlay"></div>
        <div className="banner absolute text-white mt-16 text-center">
          <h5 className="text-medium">Limited Time Offer</h5>
          <h2 className="text-large font-semibold">Special Edition</h2>
          <p className="mx-9 mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            impedit eos nemo odit at dolores vero hic a repudiandae commodi
            debitis, eligendi quis earum pariatur repellat, vitae amet obcaecati
            ducimus!
          </p>
          <h4 className="text-small font-semibold mt-5">
            Buy This T-shirt At 20% Discount Use Code Off 20
          </h4>
          <Button label="SHOP NOW" />
        </div>
      </div>

      <div className="banner-icon grid grid-cols-2 mx-8 text-center mt-12 gap-6 mb-12">
        {bannerCard.map((banner, index) => (
          <div key={index} className="banner-cards">
            <img className="mx-auto" src={banner.img} alt={banner.Name} />
            <h3 className="text-small font-semibold mt-4">{banner.Name}</h3>
          <p className="mt-3 mb-4 mx-7">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
           </div>
        ))}
      </div>
    </>
  );
}

export default Banner;
