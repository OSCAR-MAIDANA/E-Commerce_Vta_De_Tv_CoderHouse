import { useState, createContext } from "react";



export const cartContext = createContext({ cart: [] });
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarItem = (productoAAgregar) => {
    if (!estaEnElCarrito(productoAAgregar.id)) {
      setCart([...cart, productoAAgregar]);
    }
  };

  const estaEnElCarrito = (id) => {
    return cart.some(productos => productos.id === id);
  };

  const obtenerCantidad = () => {
    let acc = 0
    cart.forEach(
      productos => {acc += productos.quantity}
    );
    return acc;
  };

  const ObtenerElTotal = () => {
    let acc = 0;
    cart.forEach(
      productos => {acc += productos.quantity * productos.price}
    );
    return acc 
  };

  const removeItem = (id) => {
    const cartActualizado = cart.filter(productos => productos.id  !== id)
    setCart(cartActualizado)
  }

  const clearCart = () => {
    setCart([])
  }
  return (
    <cartContext.Provider value={{ cart, agregarItem, estaEnElCarrito, obtenerCantidad, ObtenerElTotal, removeItem, clearCart }}>
      {children}
    </cartContext.Provider>
  );

  }
export default CartProvider;
