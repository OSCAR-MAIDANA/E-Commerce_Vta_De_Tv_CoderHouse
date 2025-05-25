import "./ItemList1.css";
import Item from "../Item/Item";

const ItemList1 = ({ productos }) => {
  return (
    <div  className="divItemList1">
      {/* const arrayModificado = productos.map(productos => <h2>{productos.name}</h2>) */}
      {productos.map((productos) => (<Item key={productos.id} productos={productos} />
      ))}
    </div>
  );
};

export default ItemList1;
