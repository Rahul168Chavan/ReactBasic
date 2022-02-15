import React from "react";

function Memo({message}) {
    console.log("rending from memo Comp");
    return (
        <div>
            {message}
        </div>
    )
}

export default React.memo(Memo)