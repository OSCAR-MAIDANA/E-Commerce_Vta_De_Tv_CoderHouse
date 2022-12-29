import "./ItemListContainer.css";
import { useState, useEffect } from "react";
/* import {getProductos, getProductosByCategory} from "../../AsincMock/AsincMock"; */
import ItemList1 from "../ItemList1/ItemList1";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where,orderBy } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = () => {
  /* const ProductsContainer = () => { */

  const [productos, setProductos] = useState([]);
  const [Loading, setLoading] = useState(true)

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)
    const productosRef = categoryId
      ? query(collection(db, "productos"), where("category", "==", categoryId))
      : query(collection(db, "productos"), orderBy('name', /* 'desc', */ 'desc' ))


    getDocs(productosRef).then((response) => {
      const productosAdaptados = response.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
      setProductos(productosAdaptados);
    })
    .catch(error=> {
      console.log(error)
    })
    .finally(() =>{
      setLoading(false)
    })
    /* if (categoryId) {
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
      } */
  }, [categoryId]);
  if (Loading) {
    return <h2>Cargando... </h2>
  }

  return (
    <div >
      <h1 >Productos{/* {props.greeting} */}</h1>
      <ItemList1 productos={productos} />
    </div>
  );
};
export default ItemListContainer;
