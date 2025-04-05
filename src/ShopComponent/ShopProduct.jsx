import { useEffect, useState } from "react"
import {FetchApi} from "../Reuseable/FetchApi"
function ShopProduct() {
const [shopProduct, setShopproduct]= useState([])

useEffect(()=>{

  const shopData= async()=>{
    try{
    const shopFetch = await FetchApi()
     console.log(shopFetch);
     setShopproduct(shopFetch)
    }
    catch(error){
      throw new Error("there is error", error)
    }
  }
shopData();

},[])



  return (
    <div>
<div className="shop-product-datas mt-8">

{shopProduct.map((item)=>(
  <div key={item.id} className="shop-product-data text-center ">
<img src={item.image} alt={item.title} />
  <h3 className="text-small">{item.title.split('').slice(0,10).join('')}</h3>
  <p className=" capitalize text-gray-600"> {item.category}</p>
  <h4 className="text-small font-semibold">Price: <span>{item.price}</span></h4>

  </div>
))}


</div>
    </div>
  )
}

export default ShopProduct
