import { useState } from "react";

function Counter() {
  let [Counter, setCounter] = useState(15);

  const AddValue = () => {
    //console.log("value added",Math.floor(Math.random()*10+1));
    if(Counter<20)
      setCounter(Counter + 1);
    else
        setCounter(Counter);
  };

  const Remove=()=>{
    if(Counter>=1)
        setCounter(Counter-1);
    else
        setCounter(Counter)
  };

  return (
    <>
      <h1>React Course {Counter}</h1>
      <h2>Counter value: {Counter}</h2>

      <button onClick={AddValue}>Add Value</button>
      <br />
      <br />
      <button onClick={Remove}>Remove value</button>
    </>
  );
}

export default Counter;
