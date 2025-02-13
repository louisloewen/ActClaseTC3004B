import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Button from './Components/Button';
import List from './Components/List';
import Add from './Components/Add';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "item1", price: 1 },
    { id: 2, name: "item2", price: 2 },
    { id: 3, name: "item3", price: 3 }
  ]);
  let [count,setCount] = useState(0);
  const sum = () => {
    setCount(count+1);
  };
  const resta = () => {
    setCount(count-1);
  };
  const nombre = "Hugo Reyes";
  const elemento = <h1>Hello, {nombre}</h1>;
  const add = (item) => {
    item.id = items.length + 1
    setItems([...items, item]);
  };
  return (
    <div>
      <Header/>
      <h1>{count}</h1>
      
      <Button name={"Suma"} click={sum}/>
      <Button name={"Resta"} click={resta}/>
      <Button name={"Mensaje"} click={() => alert("hola")}/>
      <Add add={add}/>
      
      <List items={items}/>
      
      
      <Footer/>
    </div>
  );
}

export default App;
