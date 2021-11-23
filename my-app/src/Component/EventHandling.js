import React from "react";

class EventHandling extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    increment() {
        this.setState(prevState => ({
            count : this.state.count + 1
        }))

    }
    render() {
        return (
            <div>
                <div>Count-{this.state.count}</div> 
                <button onClick={()=> this.increment()}>Increment</button>             
            </div>
        )
    }
}

export default EventHandling