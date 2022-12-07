/* import Counter from "../ItemCount/ItemCount"; */
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
/* import { getProductosById } from "../../AsincMock/AsincMock"; */
import {getProductos, getProductosByCategory} from "../../AsincMock/AsincMock";
import ItemList1 from "../ItemList1/ItemList1";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  /* const ProductsContainer = () => { */

  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    if (categoryId) {
      getProductosByCategory(categoryId)
        .then(response => {
          setProductos(response);
        })
        .catch(error => {
          console.log("Hubo un error")
        })
    } else {
      getProductos()
        .then(response => {
          setProductos(response)
        })
        .catch(error => {
          console.log("Hubo un error")
        })
      }
    },[categoryId])

  return (
    <div>
      <h1>Productos{/* {props.greeting} */}</h1>
      <ItemList1 productos={productos} />
    </div>
  );
};
export default ItemListContainer;
