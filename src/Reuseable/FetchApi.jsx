
export async function FetchApi() {
    try{

        const response = await fetch('https://fakestoreapi.com/products');
        if(!response.ok){
            throw new Error("Response is not okay");
        }
        console.log(response)
           const data = await response.json()
        //    console.log(data);
           return data;
    
    }
    catch(error){
console.error("your data is not loading" + error)
throw error
} 
}


export async function subImg(){
    try{
   const imgResponse = await fetch('https://fakestoreapi.com/products/category/jewelery')
   if(!imgResponse.ok){
    throw new Error('there is problem with response')
   }
   const imgData = await imgResponse.json()
   console.log(imgData);
   return imgData;
   
    }
    catch(error){
        console.error(' there is error in data ')
    }
}


export async function menzApi(){
    try{
   const imgResponse = await fetch('https://api.escuelajs.co/api/v1/products/')
   if(!imgResponse.ok){
    throw new Error('there is problem with response')
   }
   const imgData = await imgResponse.json()
   console.log(imgData);
   return imgData;
   
    }
    catch(error){
        console.error(' there is error in data ')
    }
}


