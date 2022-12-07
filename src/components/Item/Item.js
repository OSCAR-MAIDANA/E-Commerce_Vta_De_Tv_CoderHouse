import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({productos}) => {
  return ( 
    <div  className='divItem'>
      <h2>{productos.name}</h2>
      <img src={productos.image} alt={productos.name} className="imgProductos"   />
      <p>$ {productos.price}</p>
      <p>Categoria : {productos.category}</p>
      <Link to={`/detail/${productos.id}`}>Detalle del producto</Link>
    </div>
    )   
}

export default Item
    
