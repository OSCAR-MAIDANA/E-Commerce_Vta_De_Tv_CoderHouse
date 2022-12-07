import "./ProductsContainer.css"
import { useState, useEffect } from "react";
import { getProductosById } from "../../AsincMock/AsincMock";
import { getProductos } from "../../AsincMock/AsincMock";
import ItemList1 from "../ItemList1/ItemList1";




const ProductsContainer = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductos()
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        alert("Hubo un error");
      });
  }, []);
  /*   const arrayModificado = productos.map(productos => <h2>{productos.name}</h2>) */


  return (
    <div>
      <ItemList1 productos={productos} />
    </div>
  );
};

export default ProductsContainer;
