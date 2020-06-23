import React,{ Component } from "react";
import StatefulApp from "./StatefulApp";
import ChildParentInvoke from "./interComp/ChildParentInvoke";
import UsingRefs from "./interComp/UsingRefs";
import Context from "./ContextAPI/Context";
import Button from "./Hooks/Hook2";
import DataLoader from "./Hooks/Hook4";

export default class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {'name':'Suyash'}
    }

    render(){
        return (
            
            <React.Fragment>
                <StatefulApp />
                <hr></hr>
                <ChildParentInvoke />
                <hr></hr>
                <UsingRefs />
                <hr></hr>
                <Context />
                <hr></hr>
                {/* <DemoComponent /> */}
                {/* <Button /> */}
                <Button />
                <hr></hr>
                <DataLoader />
                <hr></hr>
            </React.Fragment>
          
        )
    }
}