import { useEffect, useState } from "react";

export default function Test(){
    console.log("Function body ran");
    const [count, setCounter] = useState(0);

    useEffect(() => {
        console.log("Effect");
        function handler(){
            console.log("clicked");
        }
        document.getElementById("btn").addEventListener("click",handler)
        
        return () => document.getElementById("btn").removeEventListener("click",handler);
    })

    return (
        <>
            <h1>Helo</h1>
            <button id="btn" onClick={() => setCounter(prev => prev+1)} >Increment : {count}</button>
        </>
    )
}