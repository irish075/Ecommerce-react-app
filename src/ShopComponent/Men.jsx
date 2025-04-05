import { useState } from "react"
import { menzApi } from "../Reuseable/FetchApi"
import { useEffect } from "react"
import ShopProduct from "./ShopProduct"
function Men() {
const [menProduct, setMenproduct]= useState([])
useEffect(()=>{
  const menData= async()=>{
    try{
    const menFetch = await menzApi()
     console.log(menFetch.slice(0,25));
     setMenproduct(menFetch.slice(0,30))
    }
    catch(error){
      console.error("there is error", error)
    }
  }
menData();

},[])

  return (
    <div>
      <ShopProduct/>
  
    </div>
  )
}

export default Men
