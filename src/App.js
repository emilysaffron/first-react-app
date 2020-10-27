import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import {useState} from "react";
function App() {
  const [spin,updateSpin]=useState("logo");
  const pos = ["logo","stopped-logo"];
  const stopSpin = () => {
   
   updateSpin(pos[0]===spin?pos[1]:pos[0]);
   spin===pos[1]?document.getElementById(pos[1]).style.animationPlayState='running':document.getElementById(pos[0]).style.animationPlayState='paused';
   
  
   
  }  

 
 
    


 console.log(spin);
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} id={spin} className="App-logo" alt="logo" /> 
      
      <div onClick={stopSpin}>
        
        <Button/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
