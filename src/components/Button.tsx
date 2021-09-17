import { useState } from "react";

export function Button(){
    //let counter = 0
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1);
        console.log(counter);
        //counter += 1;
    }
    return (
        <button onClick={increment}> 
        {counter}
        </button>
    )
}

//named export = nome à exportação