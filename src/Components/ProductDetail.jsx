import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { subImg } from "../Reuseable/FetchApi";
import Button from "../Reuseable/Button";
import ProductCard from "../Components/ProductCard"

function ProductDetail({addToCart}) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
const [subset , superSubset] = useState([]);
const [ mainImg , setMainimg]= useState(" ")
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data)
       setMainimg(data.image)
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  useEffect(()=>{
   const subImages= async()=>{
try {
  const superImage = await subImg()
   const img_url= superImage.slice(0, 4).map(item=> item.image)
  superSubset(img_url)

} catch (error) {
  console.error("there is an error in sub images")
}
   }
subImages()
  },[])

  if (!product) return <p>Loading...</p>;

const changeImg= (image)=>{
  console.log(image);
  setMainimg(image)
}


  const incrementQuantity = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
      console.log("Increase function");
    }
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      console.log("decrease function");
    }
  };

  return (
 
<div>  
    <div className="Product-Page mt-16">
      <div className="product-card-design flex justify-between gap-10">
        <div className="product-img-card ">
          <div className="product-main-img">
            <img src={mainImg} alt={product.title} />
          </div>
          <div className="product-sub-img cursor-pointer ">
            {subset.map((images, index)=>(
              <img key={index} src={images} onClick={() => changeImg(images)} />
            ))

            }
          </div>
       
        </div>
        <div className="product-content">
          <h3 className="text-medium font-semibold">{product.title}</h3>
          {/* <h5 className="text-small font-semibold">Price: <span>$120.97 </span></h5> */}
          <h5 className="text-small font-semibold mt-5">
            Price: {product.price}
          </h5>
          {/* <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel delectus aut nostrum exercitationem, placeat nihil, alias, rem quasi sapiente perferendis optio natus non cupiditate aperiam officia a rerum numquam.</p> */}
          <h5 className="text-small font-semibold -mb-5 mt-5">Description</h5>
          <p className="mt-5">{product.description}</p>
          <div className="product-color flex gap-7 mt-8">
            <div className="product-color1">
              <h5 className="text-small font-semibold">Colors:</h5>
            </div>
            <div className="product-color2 flex gap-4 ">
              <div className="circle bg-orange-400"></div>
              <div className="circle bg-purple-900"></div>
              <div className="circle bg-red-600"></div>
              <div className="circle bg-gray-500"></div>
            </div>
          </div>
          <div className="product-quantity flex gap-5 mt-5">
            <div className="product-quantitiy1">
              <h5 className="text-small font-semibold">Quantity:</h5>
            </div>
            <div className="product-qunatity2 flex gap-8">
              <Button
                className="increment"
                label="+"
                onClick={incrementQuantity}
              />
              <Button label={quantity} />
              <Button
                className="decrement"
                label="-"
                onClick={decrementQuantity}
              />
            </div>
          </div>
          <div className="product-buttons mt-12 flex gap-8">
            <Button label="ADD TO CART" onClick={() => addToCart({ ...product, quantity })} />
            <Button className="product-btn" label="ADD TO WHISHLIST" />
          </div>
        </div>
      </div>
    </div>
<div className="extra-products">
<ProductCard/>
</div>

 </div>
  );
}

export default ProductDetail;
