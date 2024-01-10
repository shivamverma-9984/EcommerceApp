import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Orderpage from './Pages/Orderpage';
import Register from './Pages/Register';
import Login from './Pages/Login'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
function App() {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/orderpage" element={<Orderpage/>}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
