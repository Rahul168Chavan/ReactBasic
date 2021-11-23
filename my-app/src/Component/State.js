import React from "react";
class State extends React.Component {
    constructor() {
        super()
        this.state = {
            message : "Greeting for the day!!!"
        }
    }
    changeMessage() {
        this.setState({
            message:"Thank you for visiting the page"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default State