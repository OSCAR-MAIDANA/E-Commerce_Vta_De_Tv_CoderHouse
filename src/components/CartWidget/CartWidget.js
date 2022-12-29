import "./CartWidget.css";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { obtenerCantidad } = useContext(cartContext);
  const cantidadTotal = obtenerCantidad();

  return (
    <Link to={"/Cart"}>
       <button className="botoncarrito boton2bis" >
          <img
            className="imgcarrito"
            src={"../images/cart.svg"}
            alt="cart-widget"
            width="35vw"
            height="40vw"
          />
          cart : {cantidadTotal}
         </button>
      </Link> 

  );
};

export default CartWidget;
