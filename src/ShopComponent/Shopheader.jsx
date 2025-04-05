import shopImg from "../assets/Images/shopImg.png"
import Button from "../Reuseable/Button"
import formaiSuit from "../assets/Images/formaiSuit.png"
import WomenSuit from "../assets/Images/WomenSuit.png"

function Shopheader(){
 
  
  
    return (
    <div>
 <div className="shop-header">
    <div className="shop-main-section flex  items-center justify-between mt-8">
        <div className="shop-main-section-content mx-3 mt-12">
           <h2 className="text-large font-semibold ">Step into Style Where <span>Fashion Meets</span>  </h2>
         <p className="text-small mt-4">Lorem ipsum dolor sit amet consectetur adipisicing <br />Lorem ipsum dolor sit amet. elit. Rerum, totam. .</p>
         <Button label="SHOP NOW" className="shop-btn"/>
        </div>
        <div className="shop-main-section-img mt-12">
          <img src={shopImg}/>
        </div>
    </div>
 </div>



<div className="two-shop-cards   mt-20 flex justify-around ">
  <div className="top-shop-card flex item-center justify-center gap-2">
    <div className="two-shop-card-content">
      <h3 className="text-medium mt-16">Suits & Formal</h3>
      <Button label="SHOP NOW" className="shop-btn"/>
    </div>
    <div className="two-shop-card-img -mt-7">
  <img src={formaiSuit} alt="image of men" />
       </div>
  </div>

  <div className="top-shop-card flex item-center justify-center">
    <div className="two-shop-card-content">
      <h3 className="text-medium mt-16">Tops & Gowns</h3>
      <Button label="SHOP NOW " className="shop-btn"/>
    </div>
    <div className="two-shop-card-img">
  <img className="women-img" src={WomenSuit} alt="image of Women" />
       </div>
  </div>

</div>





</div>

  )
}

export default Shopheader
