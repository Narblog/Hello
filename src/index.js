import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import "./index.css"
import SetupIcons from "./components/setupicons/SetupIcons";
import Registration from "./components/registration/Registration";

class App extends Component {

render(){
  return <div className="app">

    <SetupIcons/>
    <Registration/>
  </div>
}

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


