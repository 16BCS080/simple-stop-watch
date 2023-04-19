import React, { useEffect, useState } from "react";  
import "./App.css";

const App = () => {
  const [ time, setTime ] = useState(0);
  const [ state, setState ] = useState('start');
  let interval = '';
  useEffect(()=>{ 
    if( state === 'start' ) {
      const interval = setInterval( () => { setTime( (t) => t+1 ) } , 1000) 
      return () => clearInterval( interval ) ;
    }  else if( state === 'refresh' ) {
      setTime(0)
      setState('start')
    }
  },[time,state])
  return(
    <div className="App">
      <span>
        { String( parseInt( ( ( time / 60 ) / 60 ) % 12 ) ).padStart(2,'0') }:
        { String( parseInt( ( time / 60 ) % 60 ) ).padStart(2,'0') }:
        { String( time % 60 ).padStart(2,'0') } 
        { parseInt( ( ( time / 60 ) / 60 ) % 24 ) < 12 ? 'AM' : 'PM' }
      </span>
      <span> { state } </span>
      <button onClick={ () => { setState('start') } } >start</button>
      <button onClick={ () => { setState('pause') } } >pause</button>
      <button onClick={ () => { setState('refresh') } } >refresh</button>
    </div>
  );
}

export default App;
