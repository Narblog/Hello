import { Component } from "react"
import "./forma.css"
class Forma extends Component{
  
        render(){
         
            const {text,type,placeholder,icon}=this.props
            return(
           <div className="divinput"> {text} :  <input type={type} className="input" placeholder={placeholder} icon={icon}/></div>  
            )
        }
}
export default Forma