
import React,{Component} from "react";

class HelloWorldClass extends Component{
    changeMessage() {
        this.setState({
            message : "Thank you for the oppournity"
        })
    }
render(){
    return <h1> Hello world from Class Component</h1>
    }
}
export default HelloWorldClass