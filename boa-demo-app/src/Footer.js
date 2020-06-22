import React,{ Component } from "react";

export default class Footer extends Component{
    render(){
        return (
            <div>
                <h3 className="bg-dark text-info">copyright || contact at : {this.props.email}</h3>
            </div>
        )
    }
}