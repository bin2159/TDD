import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
    const [changeText,setChangeText]=useState(false)
    const changeTextHandler=()=>{
        setChangeText(true)
    }
  return (
    <div>
      <h2>Hello World</h2>
      {!changeText&&<p><Output>It's good to see u</Output></p>}
      {changeText&&<p><Output>Changed!</Output></p>}

      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
