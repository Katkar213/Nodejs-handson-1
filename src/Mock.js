import React,{Component} from "react"

export default class Hello extends Component{
    constructor(props){
        super(props);
     console.log("hello")
    }
    

    render(){
        return(
            <div>
                
                <button onClick={this.props.value}>Increment</button>
                <button onClick={this.props.value2}>Decrement</button>
            </div>
        )
    }
}