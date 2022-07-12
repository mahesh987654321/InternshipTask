import Home from "./Component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./Pages/Navbar";
import Products from "./Pages/Products";
import { Route, Routes } from "react-router-dom";
import AllProduct from "./Pages/AllProduct/AllProduct";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/product/:ide" element={<AllProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
