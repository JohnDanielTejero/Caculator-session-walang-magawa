import { useEffect, useState } from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './App.css'

let initialized = false;


function App() {

  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (initialized) {
      console.log("buttons event has been initialized")
      return;
    }

    const buttons = document.getElementsByClassName("btn");
     const handleClick = (e) => {    
        const target = e.target;
        
        if(target.getAttribute("data-type") == "num"){
          console.log(target.getAttribute("data-num"));
          return;
        }

        //logic ng operator
        console.log(target.getAttribute("data-operators"));
     };

    for (const button of buttons) {
      button.addEventListener('click', handleClick);
    }
    initialized = true;
  }, []);

  return (
    <div className="App">
        <div className = "container">
            <div className='card p-0' style={{width:"100%"}}>
              <div className='card-body' style={{minHeight:"30rem", width:"30rem"}}>
                <div className='row g-2 p-0'>
                  <div className='col-12'>
                    <div className='form-floating'>
                      <input className='form-control w-100' id = "answer" disabled defaultValue={0}></input>
                      <label htmlFor='answer'>Answer</label>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='row g-2 p-0 py-1 w-100 justify-content-center'>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "7">7</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "8">8</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "9">9</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "operator"data-operators = "/">/</button>
                        </div>
                    </div>
                    <div className='row g-2 p-0 py-1 w-100 justify-content-center'>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "4">4</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "5">5</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "6">6</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "operator"data-operators = "*">*</button>
                        </div>
                    </div>
                    <div className='row g-2 p-0 py-1 w-100 justify-content-center'>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "1">1</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "2">2</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "3">3</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "operator"data-operators = "-">-</button>
                        </div>
                    </div>
                    <div className='row g-2 p-0 py-1 w-100 justify-content-center'>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "operator"data-operators = "delete">Del</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "num" data-num = "0">0</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "operator"data-operators = "answer">=</button>
                        </div>
                        <div className='col-3' style={{height:"6rem", width: "6rem"}}>
                          <button className='btn btn-outline-dark w-100 h-100' data-type = "operator"data-operators = "+">+</button>
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

export default App
