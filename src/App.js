import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";


/////// COMPONENTE APP
function App() {

  return (
    <div className="App img">
      <CartProvider>
        <BrowserRouter >
          <Navbar />
          <Routes >
            <Route path="/" element={<ItemListContainer greeting="Products" />}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Products" />}/>
            <Route path="/detail/:productosId" element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
 
}
export default App;
