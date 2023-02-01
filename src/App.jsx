import { useEffect, useState } from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './App.css'

function App() {

  const [firstNum, setFirstNum] = useState("0");
  const [secondNum, setSecondNum] = useState(null);
  const [operator, setOperator] = useState(null);
  
  const handleClick = (e) => {    
    const target = e.target;
    
    if(target.getAttribute("data-type") == "num"){
      if(!operator){
        if(firstNum.indexOf(".") != -1 && target.getAttribute("data-num") === "."){
          return;
        }
        
        setFirstNum(firstNum + e.target.getAttribute('data-num'));
        return;
      }

      if(secondNum.indexOf(".") != -1 && target.getAttribute("data-num") === "."){
        return;
      }
      setSecondNum(secondNum + e.target.getAttribute('data-num'));

      return;
    }

    //logic ng operators
    //clear
    if (target.getAttribute("data-operators") == "C"){
      if(!operator){
        setFirstNum("0");
        return;
      }
      setSecondNum("0");
      return;
    }

    //delete
    if (target.getAttribute("data-operators") == "Del"){
      if(!operator){
        let num = firstNum.substring(0, firstNum.length - 1);
        if (num == "-" || num.length == 0) num = "0"; 
        setFirstNum(num);
        return;
      }
      let num = secondNum.substring(0, secondNum.length -1);
      if (num == "-" || num.length == 0) num = "0";
      setSecondNum(num);
      return;
    }

    //negate
    if (target.getAttribute("data-operators") == "negate"){
      if(!operator){
        setFirstNum("" + (-1 * parseFloat(firstNum)));
        return;
      }
      setSecondNum("" + (-1 * parseFloat(secondNum)));
      return;
    }

    //equals
    if(target.getAttribute('data-operators') == "answer"){
      if (!operator){
        setFirstNum(firstNum);
        return;
      }
      let answer;
      switch(operator){
        case "+":
          answer = parseFloat(firstNum) + parseFloat(secondNum);
          break;
        case "-":
          answer = parseFloat(firstNum) - parseFloat(secondNum);
          break;
        case "/":
          answer = parseFloat(firstNum) / parseFloat(secondNum);
          break;
        case "*":
          answer = parseFloat(firstNum) * parseFloat(secondNum);
          break;
        case "%":
          answer = parseFloat(firstNum) % parseFloat(secondNum);
          break;
        default:
          return;
      }

      setFirstNum(answer != Infinity ? answer.toString() : "0");
      setOperator(null);
      setSecondNum(null);
      return;
    }

    setOperator(target.getAttribute('data-operators'));
    setSecondNum("0");
  };

  return (
    <div className="App">
        <div className = "container">
            <div className='card p-0' style={{width:"100%"}}>
              <div className='card-body' style={{minHeight:"30rem", width:"30rem"}}>
                <div className='row g-2 p-0'>
                  <div className='col-12'>
                    <div className='form-floating'>
                      <input className='form-control w-100' id = "answer" disabled  value = {operator == null ? parseFloat(firstNum) : parseFloat(secondNum)}></input>
                      <label htmlFor='answer'>Answer</label>
                    </div>
                  </div>
                  <div className='col-12'>
                  <div className='row g-2 p-0 py-1 w-100 justify-content-center'>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "operator" data-operators = "C">C</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "operator" data-operators = "%">%</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "operator" data-operators = "Del">Del</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "operator" data-operators = "/">/</button>
                        </div>
                    </div>
                    <div className='row g-2 p-0 py-1 w-100 justify-content-center'>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "7">7</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "8">8</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "9">9</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                        <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "operator"data-operators = "*">*</button>
                        </div>
                    </div>
                    <div className='row g-2 p-0 py-1 w-100 justify-content-center'>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "4">4</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "5">5</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "6">6</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "operator"data-operators = "-">-</button>
                        </div>
                    </div>
                    <div className='row g-2 p-0 py-1 w-100 justify-content-center'>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "1">1</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "2">2</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "3">3</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "operator"data-operators = "+">+</button>
                        </div>
                    </div>
                    <div className='row g-2 p-0 py-1 w-100 justify-content-center'>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "operator"data-operators = "negate">+/-</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "0">0</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = ".">.</button>
                        </div>
                        <div className='col-6' style={{height:"6rem", width: "6rem"}}>
                          <button onClick={handleClick} className='btn btn-outline-dark w-100 h-100' data-type = "operator"data-operators = "answer">=</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default App;