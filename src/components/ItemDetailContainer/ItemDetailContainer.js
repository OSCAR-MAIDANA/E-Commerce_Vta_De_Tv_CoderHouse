import { useState, useEffect } from "react";
import { getProductosById } from "../../AsincMock/AsincMock";
/* import { getProductos } from "../../AsincMock/AsincMock"; */
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = (props) => {
  /* const ProductsContainer = () => { */
  /*  const [isLoading, setIsLoading] = useState(true) */
  const [productos, setProductos] = useState({});
  const { productosId } = useParams();

  useEffect(() => {
    getProductosById(productosId)
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.log("Hubo un error");
      });
    /*     .finally(() => {
        setIsLoading(false);
      }) */
  }, [productosId]);

 
  return (
    <div>
      <h1> Detalle del producto</h1>
      <ItemDetail {...productos} />
    </div>
  );
};

export default ItemDetailContainer;
