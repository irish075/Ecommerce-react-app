 import { useEffect, useState } from "react"
import Button from "../Reuseable/Button"
import { useParams } from "react-router-dom"
function ProductPage() {
const {id}= useParams
const [product, setProduct]= useState(null)
const [quantity , setQuantity]= useState(1);

useEffect(()=>{
fetch(`https://fakestoreapi.com/products/${id}`)
.then((res)=>{
    if (!res.ok) {
        throw new Error("there is error in Response")
    }
    return res.json()
})
.then(data => setProduct(data))
.catch((error)=>{
throw new Error(`there is something wrong with it : ${error}`)
})




},[id]);


const incrementQuantity =()=>{
if(quantity < 20){
    setQuantity(quantity + 1)
    console.log('Increase function');

}
}
const decrementQuantity =()=>{
if(quantity > 1){
    setQuantity(quantity - 1)
    console.log('decrease function');

}


}


  return (
    <div className="Product-Page mt-16">
      <div className="product-card-design flex justify-between gap-10">
        <div className="product-img-card ">
            <div className="product-main-img">
  <img src={product.image} alt={product.title} />
                {/* <img src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"  /> */}
            </div>
        <div className="product-sub-img">
            <img src="https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img src="https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" alt="" />
       <img src="https://images.unsplash.com/photo-1622497170185-5d668f816a56?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="" />
       <img src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" alt="" />
        </div>
        
        </div>
        <div className="product-content">
            <h3 className="text-medium font-semibold">{product.title}</h3>
            {/* <h5 className="text-small font-semibold">Price: <span>$120.97 </span></h5> */}
            <h5 className="text-small font-semibold">{product.price}</h5>
            {/* <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel delectus aut nostrum exercitationem, placeat nihil, alias, rem quasi sapiente perferendis optio natus non cupiditate aperiam officia a rerum numquam.</p> */}
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
                    <Button className="increment" label="+" onClick={incrementQuantity}/>                       
                    <Button label={quantity} />                       
                    <Button className="decrement" label="-" onClick={decrementQuantity}/>                       
                </div>
            </div>
            <div className="product-buttons mt-12 flex gap-8">
                <Button label="ADD TO CART"/>
                <Button className="product-btn" label="ADD TO WHISHLIST"/>
            </div>
        </div>
      </div>

 




    </div>
  )
}

export default ProductPage
