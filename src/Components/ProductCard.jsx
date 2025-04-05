import "../assets/Fontawesome"
import { useState } from "react"
import {FetchApi} from "../Reuseable/FetchApi"
import { useEffect } from "react"
import { Link } from "react-router-dom";

function ProductCard() {
  const[product, setProduct]= useState([]);
  const [error , setError]= useState(null);
  const [loading , setLoading] = useState(true);

useEffect(()=>{

  const getData= async()=>{
    try{
      const productData =  await FetchApi()
      setProduct(productData.slice(0,10))

    }
    catch(error){
setError(error.message)
    }
    finally{
  setLoading(false)
    }

  
  }
  getData()
},[]);

if(loading){
  return <div>Loading...</div>;
}
if(error){
  return <div>Error...</div>;
}


  return (
    <div className="mt-28 mb-8">

<h2 className="text-center text-large font-semibold mb-12">Feature <span>Category</span></h2>
    <div  className="product-Cards text-center">
    {product.map((item)=>(
      <Link key={item.id} to={`/product/${item.id}`}> 
 <div key={item.id} className="productCard">
  <div className="product-img ">
  <img src={item.image} alt={item.title}/>
  </div>
 <h3 className="text-small mt-4 font-semibold">{item.title.split('').slice(0, 12).join('')}</h3>
 <p className=" capitalize text-gray-500">{item.category}</p>
 <h4 className="font-semibold">Price: <span>{item.price}</span></h4>
      
    </div>
    </Link>
    ))}
   </div>
</div>
  );
}

export default ProductCard
