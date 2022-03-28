import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Component/Cart';
import Header from './Component/Header';
import Home from './Component/Home';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} excat></Route>
      <Route path='/cart' element={<Cart/>} ></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
