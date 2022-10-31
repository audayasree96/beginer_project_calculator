import logo from './logo.svg';
import './App.css';
//import UserProfile from './components/UserProfile/index';


import React, { useState,useEffect } from 'react'; 
function App(){
  const [input,setInput]=useState("");
  const handler= e =>{
    setInput(e.target.value)
  }
  const [result,setResult]=useState(0);

  return(
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand"><input type="text" value={input} name="input" onChange={handler} /> </div>
        <div className="previous-operand">{result}</div>
      </div>
      <button className="span-two"  onClick={()=>setInput('')}>AC</button>
      <button onClick={()=>setResult('')}>DEL</button>
      <button onClick={()=>setInput(input+'/')}>/</button>
      <button  onClick={()=>setInput(input+'1')}>1</button>
      <button onClick={()=>setInput(input+'2')}>2</button>
      <button onClick={()=>setInput(input+'3')}>3</button>      
      <button onClick={()=>setInput(input+'*')}>*</button>
      <button onClick={()=>setInput(input+'4')}>4</button>
      <button onClick={()=>setInput(input+'5')}>5</button>
      <button onClick={()=>setInput(input+'6')}>6</button>
      <button onClick={()=>setInput(input+'+')}>+</button>
      <button onClick={()=>setInput(input+'7')}>7</button>
      <button onClick={()=>setInput(input+'8')}>8</button>
      <button onClick={()=>setInput(input+'9')}>9</button>
      <button onClick={()=>setInput(input+'-')}>-</button>
      <button onClick={()=>setInput(input+'.')}>.</button>
      <button onClick={()=>setInput(input+'0')}>0</button>
      <button className="span-two" onClick={()=>setResult(eval(input))}>=</button>
     
  </div>
  );
}

export default App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                