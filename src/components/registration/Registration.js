import { Component } from "react";
import "./registration.css"
import Forma from "./forma/Forma";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa6";
import Button from "./Button/Button";
class Registration extends Component {
    render() {
        return (
            <div className="form">
                <Forma className="hamar1" text="Name" type="text" placeholder="Name" />
                <Forma text="Male" type="radio"  />  
                <Forma text="Date of Birthday:" type="datetime-local" placeholder="Email" />
                <Forma text="Email" type="text" placeholder="Email" />
                <Forma text="Customer Id" type="text" placeholder="Customer Id" />
                <div >
                MemberShip:  <FaFacebook className="fa"/>  <FaGithub className="fa"/> <FaGoogle className="fa"/>
                </div>
                <div className="buttondiv">
                <Button  text="Cancel" />
                <Button text="Submit" />
                </div>
               
            </div>
        )
    }
}

export default Registration