import "./Cart.css"
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
 
const Cart = () => {
  const { cart, removeItem, ObtenerElTotal } = useContext(cartContext);
    const total = ObtenerElTotal()
  return (
    <div className="img stylecart" style={{height: "610px"}}>
     <h2> Carrito </h2>
      {
        cart.map(productos => {
            return (
                <div key={productos.id }>
                    <h2 className="colorTipografia">{productos.name}</h2>
                    <h2 className="colorTipografia">$ {productos.price}</h2>
                    <h2 className="tamañoTipografia">Cantidad: {productos.quantity}</h2>
                    <h2 className="colorTipografia">Subtotal: {productos.price * productos.quantity}</h2>
                    <button onClick={() => removeItem(productos.id)} className="botonesvscarrito1" >Eliminar producto</button>
                </div>
             );
      })
    }
     <h3 className="colorTipografia">Total : $ {total} </h3>

     <Link className="botonesvscarrito1"  to='/Checkout'>Terminar orden</Link>
    </div>
  );
};

export default Cart;
