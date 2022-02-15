import React from "react";

class Ref extends React.Component {
    constructor() {
        super()
        this.input = React.createRef()
    }
    componentDidMount() {
        this.input.current.focus()
        console.log(this.input);
    }
    render() {
        return (
            <div>
                <input type ='text' ref={this.input}/>
            </div>
        )
    }
}

export default Ref