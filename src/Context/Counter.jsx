import { createContext, useContext, useState } from "react";


// ILK cONTEXT YAaradiriq
const CounterContext=createContext()

export const CounterProvider=({children})=>{
    const[Count,setCount]=useState(0)

    const data={
        Count,
        setCount
    }

    return(
        <CounterContext.Provider value={data}>
            {children}
        </CounterContext.Provider>
    )
}

export const useCount=()=> useContext(CounterContext)