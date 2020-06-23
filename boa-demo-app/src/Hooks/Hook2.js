import React, { useState } from "react";

export default function Button() {
 //const customers={text:'click me'}
 //state={name:'muthy'} 
 //this.setState , react will react
 
  const [buttonText, setButtonText] = useState("Click me, please");
  
  function handleClick() {
    return setButtonText("Thanks, been clicked!");
  }
  return <button onClick={handleClick}>{buttonText}</button>
}










//useState
//useRef
//useContext
//useEffect
//useReducer
//useFetch
//.....