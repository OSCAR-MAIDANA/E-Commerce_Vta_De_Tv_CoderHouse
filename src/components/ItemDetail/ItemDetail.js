import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({
  id,
  name,
  image,
  description,
  price,
  category,
  stock,
}) => {
  const { agregarItem, estaEnElCarrito } = useContext(cartContext);

  const handleOnAdd = (quantity) => {
    agregarItem({ id, name, price, quantity });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", height:"580px" }}
    >
      <h2 className="colorTipografia">{name}</h2>
      <img src={image} alt={name} width="400vw" height="300vw" />
      <p className="tamañoTipografia"> {description}</p>
      <h2 className="colorTipografia">$ {price}</h2>
      <h3 className="colorTipografia">{category}</h3>
      <div>
        {estaEnElCarrito(id) ? (
          <Link to="/Cart" className="botonesvscarrito1">
            {" "}
            Finalizar compra{" "}
          </Link >
        ) : stock > 0 ? (
          <ItemCount stock={stock} onAdd={handleOnAdd} />
        ) : (
          <h1 className="colorTipografia">Sin Stock</h1>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
