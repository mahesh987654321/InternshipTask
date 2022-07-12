import Home from "./Component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./Pages/Navbar";
import Products from "./Pages/Products";
import { Route, Routes } from "react-router-dom";
import AllProduct from "./Pages/AllProduct/AllProduct";
import ProductDetails from "./Pages/ProductDetails";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/product/:ide" element={<AllProduct />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
