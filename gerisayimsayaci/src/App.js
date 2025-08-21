
import React,{useEffect, useState} from 'react';
import './App.css';

function App() {

  const [timer, setTimer] = useState(5);

  useEffect(()=>{
    if(timer!==0)
    {
      const interval = setInterval(()=>{
      setTimer(prevTimer=>prevTimer-1);
    },1000);
    return()=> clearInterval(interval);
    }
    else
    {
      document.title="Bitti"
    }
  })

  return (
    <div className="App">
      <div style={{height:"200px",width:"200px",backgroundColor:"purple",borderRadius:"50%",margin:"10px auto",color:"white",lineHeight:"200px",fontSize:"30pt"}}>
        {timer}
      </div>
    </div>
  );
}

export default App;
