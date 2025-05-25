import {
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { useContext } from "react";
import { useState } from "react";
import { cartContext } from "../Context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";

const Checkout = () => {
    const [user, setUser] = useState({});
    /* const { user, setUser } = useContext(cartContext); */

    const updateUser = (event) => {
      setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
    };

    const handleOnSubmit = (e) => {
      e.preventDefault();
    };
    const { cart, ObtenerElTotal, clearCart } = useContext(cartContext);
    const [loading, setLoading] = useState(false);

    const handleCreateOrder = async () => {
      setLoading(true);
      try {
        const objetOrder = {
          buyer: user,
          items: cart,
          total: ObtenerElTotal(),
        };

        const batch = writeBatch(db);

        const ids = cart.map((productos) => productos.id);

        const productosRef = query(
          collection(db, "productos"),
          where(documentId(), "in", ids)
        );
        const productosAgregadosAlCarritoDesdeFirestore = await getDocs(
          productosRef
        );
        const { docs } = productosAgregadosAlCarritoDesdeFirestore;
        const fueraDeStock = [];

        docs.forEach((doc) => {
          const dataDoc = doc.data();
          const stockDb = dataDoc.stock;

          const productosAgregadosAlCarrito = cart.find(
            (productos) => productos.id === doc.id
          );
          const prodQuantity = productosAgregadosAlCarrito?.quantity;

          if (stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity });
          } else {
            fueraDeStock.push({ id: doc.id, ...dataDoc });
          }
        });

        if (fueraDeStock.length === 0) {
          await batch.commit();
          const orderRef = collection(db, "orders");
          const orderAdedd = await addDoc(orderRef, objetOrder);
          clearCart();
          alert(`Su nro de orden es: ${orderAdedd.id}`);
        } else {
          alert("Productos fuera de stock");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (loading) {
      return <h2>Generando orden...</h2>;
    }

    return (
      <div style={{height: "610px"}}>
        <h1>Checkout</h1>
        <div>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={updateUser}
          placeholder="Nombre"
          name="name"
          type="text"
          className="text-black p-2"
        />
        <input
          onChange={updateUser}
          placeholder="Apellido"
          name="surname"
          type="text"
          className="text-black p-2"
        />
        <input
          onChange={updateUser}
          placeholder="Telefono"
          name="phone"
          type="number"
          className="text-black p-2"
        />
        <input
          onChange={updateUser}
          placeholder="Email"
          name="email"
          type="text"
          className="text-black p-2"
        />
      
      </form>
    </div >
        <button onClick={handleCreateOrder} className="botonesvscarrito1">Confirmar orden </button>
      </div>
    );
  };;
export default Checkout;
