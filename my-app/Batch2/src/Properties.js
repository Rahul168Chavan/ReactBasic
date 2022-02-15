import React from "react";

const Properties = (props) => {
    return (
        <div>
            <h1> Hello I am {props.name} {props.lastname}and I know {props.lang} language and I am {props.age} old</h1>
        </div>
    )
}

export default Properties