import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


/////// COMPONENTE APP
function App() {
  

  /////// RETURN
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Products" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Products"/>} />
          <Route path='/detail/:productosId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
