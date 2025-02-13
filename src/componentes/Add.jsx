import React, { useState } from 'react'
import Button from './Boton'

const Add = ({ add }) => { const [name, setName] = useState("");
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)}
      type="text" name="" id="" />
      <input type="text" name="" id="" />
      <Button name="Agregar" />
    </div>
  );
};

export default Add;
