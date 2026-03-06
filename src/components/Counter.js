import './Counter.css';
import {useState,useEffect} from "react";

export function Counter()
{
    //useEffect(() => {}, []);
    let [cnt, setCnt] = useState(0);
    function increment()
    {
        setCnt(cnt + 1);
    }
    function decrement()
    {
        setCnt(cnt-1);
    }
    useEffect
    (
        () => 
            {
                console.log("Hello from Counter", cnt);
                return () => console.log("Counter unmounted");
            }, 
            [cnt]
    )

    return(
        // https://stackoverflow.com/questions/41726086/why-isnt-my-margin10px-auto-working
        <div style={{width:'120px', margin:"0 auto", fontSize:'32px'}}>
            <div>{cnt}</div>
            <div style={{display:"flex"}}>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}