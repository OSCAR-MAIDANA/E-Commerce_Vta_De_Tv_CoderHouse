import "./Navbar1.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img className="imglogo" src={"./images/logo_tv_sale.png"} alt="" />
      <Link to="/category/HD" className="boton2bis" >
        Definicion HD
      </Link>
      <Link to="/category/FULL HD" className="boton2bis">
        Definicion FULL HD
      </Link>
      <Link to="/category/FHD 4K" className="boton2bis">
        Definicion 4K
      </Link>
      <Link to="/category/Accesorios" className="boton2bis">
        Accesorios
      </Link>
      <Link to="/" className="boton2bis">
        Lista
      </Link>
      <Link to="/" className="boton2bis">
        Home
      </Link>
      <Link to="/About" className="boton2bis">About</Link>
      <div>
        <CartWidget />  
      </div>
    </nav>
  );
};

export default Navbar;
