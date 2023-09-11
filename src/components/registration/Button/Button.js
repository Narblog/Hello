import { Component } from "react"
import "./button.css"
class Button extends Component{
    render(){
        const {text}=this.props
        const style = {};
        switch (text) {
          case "Cancel": style.backgroundColor = '#E99A9A'; break;
          case "Submit": style.backgroundColor = '#62E8C5'; break;
          default: style.backgroundColor = '#eee'; break;
        }
        return(
            <button  className="buttons" style={style}>{text}</button>
        )
    }
}
export default Button