import {useState} from  "react"
import Hello from "./Mock"

export default function Parent(){
    const[count,setCount]=useState(0);

    function handleCount(){
        setCount(count+1)
    }
    function handledecrement(){
        setCount(count-1)
    }
    return(
        <>
        {count}
         <Hello value={handleCount} value2={handledecrement} />

        </>
    )
}