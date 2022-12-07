import Counter from "../ItemCount/ItemCount";




const ItemDetail = ({id, name, image, description, price, category, stock}) => {
  const handleOnAdd = (quantity) => {
    console.log("se agrego al carrito" + quantity);
  };

  return (
    <div>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>{description}</p>
        <h2>$ {price}</h2>
        <h3>{category}</h3>
        <div className="botonesvscarrito">
          <Counter initial={0} stock={stock} onAdd={handleOnAdd} />
        </div>
      </div>
  );
};

export default ItemDetail;
