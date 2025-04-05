import { useEffect, useState } from "react";
function ProductApi() {
const [product, setProduct]=useState([]);
    const ApiUrl= 'https://fakestoreapi.com/products';
useEffect(()=>{
console.log("use effect work");
fetch(ApiUrl)
.then((response)=>{
    if(!response.ok){
        throw new Error("Error is here");
    }
    return response.json()
})
.then((data)=>{
    setProduct(data)
    console.log(data);
})
.catch(error=> console.error(`Product Data is not defined ${error}`));


},[])

    return (
<>
 {product.map((item)=>(
    <div className="productCard" key={item.id}>
     <img  style={{height:"200px"}} src={item.image}  />
     <h2>{item.title}</h2>
     <p>{item.price}</p>
    </div>
))

} 



</>

    )
}

export default ProductApi
