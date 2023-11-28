import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../Context/BasketContext";


function Props() {
    const[data,setData]=useState(null)
    const[basket,setBasket]=useContext(BasketContext)
    useEffect(()=>{
        fetch("https://jsonplaceholder.org/posts")
        .then(res=>res.json())
        .then(x=>{
            console.log(x);
            setData(x)
        })
    },[])

    return(
        <h1>Home
            {console.log(data)}
            {data && data.map(x=>
            <ul>
                <li>{x.id}</li>
                <li>{x.slug}</li>
                <li>{x.category}</li>
                <button onClick={()=>setCount(Count=>Count+1)}>Add cart</button>
            </ul>
       
           )}
        </h1>
    )
}
export default Props