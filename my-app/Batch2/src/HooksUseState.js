import React, {useState} from "react";

function HooksUseState() {
    const[count,setCount] = useState(0)
    return (
        <div>
            <span>Count{count}</span>
            <br></br>
            <button onClick={() =>setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default HooksUseState
