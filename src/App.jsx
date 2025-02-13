import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Boton from './componentes/Boton';
import List from './componentes/List';
import Item from './componentes/Item';

function App() {
  const items = [
    { id: 1, name: "item1", price: 1},
    { id: 2, name: "item2", price: 2},
    { id: 3, name: "item3", price: 3},
  ];
  const [count, setCount] = useState(0);
  const sum = () => {setCount(count + 1);
  };
  const resta = () => {setCount(count - 1);
  };
  const add = (item) => {
    item.id = items.length + 1;
    items.push(item);
  };
  return (
    <div>
      <Header />
      {count}
      <Boton name={"suma"} click={sum} />
      <Boton name={"resta"} />
      <Boton name={"mensaje"} click={() => alert("Hola")} />
      <Add add={add} />
      <List items={items} />
      <Footer />
    </div>
  );
}

export default App;
