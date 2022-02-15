import React,{Component} from "react";
import { PureComponent } from "react/cjs/react.production.min";
import NormalComp from "./NormalComp";
import PureComp from "./PureComp";
import Memo from "./Memo";

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message : 'Rahul'
        }
    }

    componentDidMount() {
        setInterval(() => {
        this.setState({
            message : 'Chavan'
        })
    }, 2000)
    }

    render () {
        console.log("***********************************Parent Component*****************************************");
        return (
            <div>
                Parent Component
               <Memo name = {this.state.message} />
            </div>
        )
    }
}

export default ParentComponent