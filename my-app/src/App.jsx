import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
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
  const [items, setItems] = useState([]);
  const [count,setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if(isLogin){
      getItems();
    }
  }, [IsLogin]);
  const getItems = async () => {
    const result = await fetch("https://localhost:5000/items/");
    const data = await result.json();
    setItems(data);
  };
  // const sum = () => {
  //   setCount(count+1);
  // };
  // const resta = () => {
  //   setCount(count-1);
  // };

  // const nombre = "Hugo Reyes";
  // const elemento = <h1>Hello, {nombre}</h1>;
  const add = async(item) => {
    // item.id = items.length + 1
    const result = await fetch("http://localhost:5000/items/",{
      method:"POST", 
      headers: {"content-type":"application-json"},
      body: JSON.stringify(item),
    });
    const data = await result.json();
    setItems([...items, item]);
  };

  const del = async(id) => {
    await fetch("http://localhost:5000/login/" + id,{method: "DELETE" });
    setItems(items.filter((item) => item.id !== id));
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (user) => {
    const result = await fetch("http://localhost:5000/login/",{
    method:"POST", 
    headers: {"content-type":"application-json"},
    body: JSON.stringify(user),
  });
  const data = result.json();
  setIsLogin(data.isLogin);
  return data.isLogin;
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
