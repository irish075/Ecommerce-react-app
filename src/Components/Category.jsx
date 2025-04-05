import { Link } from "react-router-dom";

import Image1 from "../assets/Images/Image1.jpg";
import Image2 from "../assets/Images/Image2.jpg";
import Image3 from "../assets/Images/Image3.jpg";
import Image4 from "../assets/Images/Image4.jpg";
import Image5 from "../assets/Images/Image5.jpg";
import Image6 from "../assets/Images/unstiched.jpeg";
import Button from "../Reuseable/Button";

function Category() {
  const categoryArray = [
    { name: "BOY", image: Image1 }, // Use the imported variable
    { name: "MEN", image: Image2 }, // Correct image reference
    { name: "KIDS", image: Image3 }, // Correct image reference
    { name: "WOMEN", image: Image5 }, // Correct image reference
    { name: "GIRLS", image: Image4 }, // Correct image reference
    { name: "UNSTICHED", image: Image6 }, // Correct image reference
  ];

  return (
<div>



<div className="category-section">
 <h2 className="text-large font-semibold text-center mt-16 mb-6">Clothes <span>Category</span></h2>
 <div className="category-card">
{
  categoryArray.map((category, index)=>(
    <Link className="link-category" key={index}>
    <img src={category.image}/>
    <h3>{category.name}</h3>
    </Link>
  ))

}
 </div>
  </div>

<div className="top-three flex gap-4 items-center justify-center">
  <div className="top-three-card">
    <div className="overlay"></div>
    <h2 className="absolute z-10 ml-5 text-medium bottom-32 text-white">Discover elegance in every stitch!</h2>
  <p className="absolute text-white bottom-20 ml-3 font-extralight ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam quam .</p>
  <Button label="SHOP NOW"/>
  </div>
  <div className="top-three-card">
    <div className="overlay"></div>
    <h2 className="absolute z-10 ml-5 text-medium bottom-32 text-white">Discover our new arrivals!</h2>
    <p className="absolute text-white bottom-20 ml-3 font-extralight ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam quam .</p>
    <Button label="SHOP NOW"/>
    </div>
    <div className="top-three-card">
    <div className="overlay"></div>
   <h2 className="absolute z-10 ml-5 text-medium bottom-32 text-white">Find your new favorites!</h2>
    <p className="absolute text-white bottom-20 ml-3 font-extralight ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam quam .</p>
    <Button label="SHOP NOW"/>
    </div>
</div>


  </div>





  //    {/* <div className="mt-16">
  //   <h3 className="category-h3 font-semibold mt-8 mb-5">Clothes <span>Category</span></h3>
  // <div className="category-container">
  //     {categoryArray.map((category, index) => (
  //       <div key={index} className="category-img">
  //         <div className="category-card">
  //           <Link to="/">
  //             <img src={category.image} />
  //             <h2>{category.name}</h2>
  //           </Link>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  //     </div>
  //   */}
  );
}

export default Category;
