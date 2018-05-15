import React, {Component} from "react";
import DropdownMenuChoices from "./DropdownMenuChoices.js";

class Generator extends Component{
    constructor(){
        super();
        this.state = {};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSubmit(e){

    }




    render(){
        return(
            <div>
                <DropdownMenuChoices />
                <input />
                <input />
                <input />
                <button onClick={this.handleSubmit} />
            </div>
        )
    }
}

export default Generator;