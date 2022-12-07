import { useState } from "react";
import './ItemCount.css'


const Counter = ({ initial, stock, onAdd }) => {
  /*   let count = initial; */
  const [count, setCount] = useState(1);
  /* const [title, setTitle] = useState("Agregar item"); */

  // funcion incrementar
  const increment = () => {
    /* count = count + 1;*/
    if (count < stock) {
      setCount((prevValue) => prevValue + 1);
      /* setTitle("Agregar item"); */
    }
    /*setTitle(count + " " + "Item agregados"); */
  };

  //funcion decrementar
  const decrement = () => {
    /* count = count - 1;*/
    if (count > 1) {
      setCount((prevValue) => prevValue - 1);
    }

    /*setTitle(count +" " +"Item quitados") */
  };

  // funcion limpiar
  const clear = () => {
    setCount(initial);
    /* setTitle("Se quitaron todos los items"); */
  };

  return (
    <div>
      {/* <h2>{title}</h2> */}
      <h4>{count}</h4>
      <button onClick={() => onAdd(count)} disabled= {count === 0}>Agregar al carrito</button>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => clear()}>clear</button>
    </div>
  );
};

export default Counter;
