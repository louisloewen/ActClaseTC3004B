import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Button from './Components/Button';
import List from './Components/List';
import Add from './Components/Add';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import Login from './Components/Login';
import Home from './Components/Home';
import Logout from './Components/Logout';

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

  const del = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (user) => {
    let islogin = false
    if (user.username === "Abdiel" && user.password === "1234"){
        islogin=true;
      }
    setIsAuthenticated(islogin); 
  return islogin;
  };

  const logout = () => {
    let islogin = false
    setIsAuthenticated(islogin);
    return islogin
  };

  return (
    <div>
      <BrowserRouter>
      <ResponsiveAppBar isAuthenticated={isAuthenticated} logout={logout} />
          <Routes>
            <Route path="/home" element={<Home />} />      
            <Route path="/agregar-item" element={<Add add={add}/>}/>
            <Route path="/lista-items" element={<List items={items} ondelete={del}/>}/>
            <Route path="/login" element={!isAuthenticated ? <Login login={login} /> : <Home />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    
      
      
    </div>
  );
}

export default App;
