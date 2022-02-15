import React from "react";

class NormalComp extends React.Component {
    render () {
        console.log("*Normal Component*");
        return (
            <div>
                Normal Component {this.props.name}
            </div>
        )
    }
}

export default NormalComp