import { Component } from "react";
import "./setupicons.css"
import { CgProfile} from "react-icons/cg";
import {AiFillRightCircle} from "react-icons/ai";
import Sign from "./signin/Sign";

class SetupIcons extends Component{
render(){
    return(
        <div className="icons">
         <CgProfile className="icon"/>
         <Sign />
        < AiFillRightCircle className="iconright"/>
        </div>
    )
}
}

export default SetupIcons