import React, { useState } from 'react'
import Button from './Button'

const Add = ({add}) => {
  const [name,setName] = useState("")  
  return (
    <div>
        <input 
            onCHange={(e) => setName(e.target.value)}
            value={name}
            type = "text" 
            name="" 
            id="">
        </input>
        <input type = "text" name="" id=""></input>
        <Button name = "Agregar"/>    
    </div>
  );
};

export default Add
