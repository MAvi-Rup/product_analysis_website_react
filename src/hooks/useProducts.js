import { useEffect, useState } from "react"

const useProducts = ()=>{
    const [review,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))

    },[]);
    return [review,setProducts];
}
export default useProducts;