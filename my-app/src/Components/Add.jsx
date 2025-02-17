import React, { useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';

const Add = ({add}) => {
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const onsubmit = (e) => {
    e.preventDefault();
    if (!name || !price ) {
      alert("Ingresa algo ")
      return
    };
    add({name,price});
    setName("");
    setPrice("");
    navigate("/items")
  };
  return (
    <form onSubmit={onsubmit}>
        <input 
            onChange={(e) => setName(e.target.value)}
            value={name}
            type = "text" 
            name="" 
            id="">
        </input>
        <input 
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type = "text" 
            name="" 
            id="">
        </input>
        <input type = "text" name="" id=""></input>
        <input type = "submit" name = "Agregar"/>    
    </form>
  );
};

export default Add
