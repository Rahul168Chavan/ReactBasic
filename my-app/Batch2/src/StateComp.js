import React from "react";
import HelloWorldClass from "./HelloWorldClass";

class StateComp extends React.Component {
    constructor () {
        super()
        this.state = {
            message : "Hello Trainees"
        }
    }
    changeMessage() {
        this.setState({
            message : "Thank you for the oppournity"
        })
    }
    render() {
        return (
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>ClickMe!!</button>
            </div>
        )
    }
}

export default StateComp