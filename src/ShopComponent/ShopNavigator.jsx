import Button from "../Reuseable/Button"
// import ShopProduct from "./ShopProduct"
function ShopNavigator({setSelectedcategory}) {
  return (
    <div>
       <div className="shop-nav flex justify-between items-center mt-20">
        <div className="shop-nsv-heading">
            <h2 className="text-large ml-8">Best Selling</h2>
        </div>
        <div className="shop-nsv-links">
            <ul className="shop-nav-ul flex ">
                <li className="p-4"> <Button onClick={()=>setSelectedcategory('Men')} label="Men"/></li>
                <li className="p-4"> <Button onClick={()=>setSelectedcategory('Women')} label="Women"/></li>
                <li className="p-4"> <Button onClick={()=>setSelectedcategory('jwellery')} label="jwellery"/></li>
            </ul>
        </div>

       </div>

 
   
    </div>
  )
}

export default ShopNavigator
