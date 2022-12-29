import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({productos}) => {
  return ( 
    <div  className='divItem'>
      <h2 className='colorTipografia'>{productos.name}</h2>
      <img src={productos.image} alt={productos.name} className="imgProductos"   />
      <p className='tamañoTipografia'>$ {productos.price} </p>
      <p className='tamañoTipografia'>Categoria : {productos.category}</p>
      <Link to={`/detail/${productos.id}`} className="botonesvscarrito1">Detalle del producto</Link>
    </div>
    )   
}

export default Item
    
