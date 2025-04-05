import { useState } from "react"
import ShopNavigator from "../ShopComponent/ShopNavigator"
import Shopheader from "../ShopComponent/Shopheader"
import Men from "../ShopComponent/Men"
import Women from "../ShopComponent/Women"
import Jwellery from "../ShopComponent/Jwellery"
import ShopProduct from "../ShopComponent/ShopProduct"
import Button from "../Reuseable/Button"

function Shop() {
  const [selectedCategory , setSelectedcategory]= useState(' ')

 const renderCategory=()=>{
  switch (selectedCategory) {
    case 'Men':
      return <Men/>;
      case 'Women':
        return <Women/>;
        case 'jwellery':
          return <Jwellery/>
  
  
    default:
return <ShopProduct/>;
  }
 }




  return (
    <div>
<Shopheader/>
<ShopNavigator setSelectedcategory={setSelectedcategory}/>
<div className="product-render-data">
  {renderCategory()}
</div>
<div className="shop-banner relative">
  <div className="overlay"></div>
<div className="shop-ban absolute">
<h1 className=" mt-5 ml-5 text-white">Best Offer-Up <br/> To <span>50%</span> </h1>
<Button label="SHOP NOW" className="ml-8 -mb-8 shop-btn"/>
</div>
</div>

{/* Latest BLog */}
<div className="latest-blog-section">
  <h2 className="-mb-20 text-center font-semibold text-large"> Latest Blogs</h2>
<div className="latest-blogs flex gap-8 ">
<div className="latest-blog">
  <img src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxsZXJ5fGVufDB8fDB8fHww"  />
 <h3 className="font-semibold capitalize">The Art of Layering : Creating Stylish and Functional Outfits</h3>
 <div className="a font-semibold text-blue-500 mt-2">Read More</div>
</div>
<div className="latest-blog">
  <img src="https://images.unsplash.com/photo-1450297166380-cabe503887e5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"  />
 <h3 className="font-semibold capitalize">The Art of Layering : Creating Stylish and Functional Outfits</h3>
 <div className="a font-semibold text-blue-500 mt-2">Read More</div>
</div>
<div className="latest-blog">
  <img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"  />
 <h3 className="font-semibold capitalize">The Art of Layering : Creating Stylish and Functional Outfits</h3>
 <div className="a font-semibold text-blue-500 mt-2">Read More</div>
</div>
</div>
</div>
    </div>
  )
}

export default Shop
