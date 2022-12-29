import { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = (props) => {
  /* const ProductsContainer = () => { */
  const [Loading, setLoading] = useState(true)
  const [productos, setProductos] = useState({});

  const { productosId } = useParams();

  useEffect(() => {
    const productosRef = doc(db, "productos", productosId);

    getDoc(productosRef)
    .then(response => {
      const data = response.data();
      const productosAdaptados = { id: response.id, ...data };
      setProductos (productosAdaptados)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() =>{
      setLoading(false)
    })

  }, [productosId])

  if (Loading) {
    return <h2>Cargando... </h2>
  }
  return (
    <div >
      <h1 > Detalle del producto</h1>
      <ItemDetail {...productos} />
    </div>
  );
};

export default ItemDetailContainer;
