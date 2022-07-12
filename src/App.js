import Home from "./Component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./Pages/Navbar";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Products />
    </div>
  );
}

export default App;
