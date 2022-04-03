import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Component/Cart';
import Checkout from './Component/Checkout';
import Header from './Component/Header';
import Home from './Component/Home';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>/home
      <Route path='/' element={<Home/>} ></Route>
      
      <Route path='/cart' element={<Cart/>} ></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
